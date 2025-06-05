const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.json());
const con = require('./db/db');
require('./db/initDB');

app.get('/', function(requisicao, resposta){
    var link_github = 'https://github.com/juliasoares17'
    var link_linkedin = 'https://www.linkedin.com/in/julia-soares-pereira-9ab79830b/'
    var endereco_email = 'juliapereira1448@gmail.com'

    resposta.render('index', {
        link_github: link_github,
        link_linkedin: link_linkedin,
        endereco_email: endereco_email
    })
})

app.get('/projetos', async function(requisicao, resposta){
    try {
        const [projetos] = await con.query('SELECT * FROM projetos');
        resposta.render('projetos', { projetos });
    } catch (err) {
        console.error('Erro ao buscar projetos: ', err);
        resposta.status(500).send('Erro ao buscar projetos.');
    }
});

app.post('/projetos', async function(requisicao, resposta){
    const {
        titulo, legenda, descricao_problema, descricao_desafios,
        descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto
    } = requisicao.body;

    const sql = `
        INSERT INTO projetos (
        titulo, legenda, descricao_problema, descricao_desafios,
        descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    try {
        const [resultado] = await con.query(sql, [
        titulo, legenda, descricao_problema, descricao_desafios,
        descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto
        ]);
        resposta.send({ mensagem: `Projeto novo inserido com sucesso.` , id: resultado.insertId, dados: requisicao.body });
    } catch (err) {
        console.error('Erro ao inserir projeto: ', err);
        resposta.status(500).send('Erro ao inserir projeto.');
    }
});

app.put('/projetos/:id', async function(requisicao, resposta) {
  const {
    titulo, legenda, descricao_problema, descricao_desafios,
    descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto
  } = requisicao.body;

  const sql = `
    UPDATE projetos SET
      titulo = ?, legenda = ?, descricao_problema = ?, descricao_desafios = ?,
      descricao_solucoes = ?, descricao_aprendizados = ?, imagem_projeto = ?, github_projeto = ?
    WHERE id = ?
  `;

  try {
    await con.query(sql, [
      titulo, legenda, descricao_problema, descricao_desafios,
      descricao_solucoes, descricao_aprendizados, imagem_projeto, github_projeto,
      requisicao.params.id
    ]);
    resposta.send({ mensagem: `Projeto ${requisicao.params.id} atualizado com sucesso.` });
  } catch (err) {
    console.error('Erro ao atualizar projeto: ', err);
    resposta.status(500).send('Erro ao atualizar projeto.');
  }
});


app.delete('/projetos/:id', async function(requisicao, resposta) {
  try {
    await con.query('DELETE FROM projetos WHERE id = ?', [requisicao.params.id]);
    resposta.send({ mensagem: `Projeto ${requisicao.params.id} excluído com sucesso.` });
  } catch (err) {
    console.error('Erro ao excluir projeto: ', err);
    resposta.status(500).send('Erro ao excluir projeto.');
  }
});

app.get('/certificados', async function(requisicao, resposta) {
  try {
    const [certificados] = await con.query('SELECT * FROM certificados');
    resposta.render('certificados', { certificados });
  } catch (err) {
    console.error('Erro ao buscar certificados: ', err);
    resposta.status(500).send('Erro ao buscar certificados.');
  }
});


app.post('/certificados', async function(requisicao, resposta) {
  const {
    instituicao, duracao, descricao, imagem_certificado, pdf_certificado
  } = requisicao.body;

  const sql = `
    INSERT INTO certificados (
      instituicao, duracao, descricao, imagem_certificado, pdf_certificado
    ) VALUES (?, ?, ?, ?, ?)
  `;

  try {
    const [resultado] = await con.query(sql, [
      instituicao, duracao, descricao, imagem_certificado, pdf_certificado
    ]);
    resposta.send({ mensagem: `Certificado novo inserido com sucesso.`, id: resultado.insertId, dados: req.body });
  } catch (err) {
      console.error('Erro ao inserir certificado: ', err);
      resposta.status(500).send('Erro ao inserir certificado.');
  }
});

app.put('/certificados/:id', async function(requisicao, resposta) {
    const { instituicao, duracao, descricao, imagem_certificado, pdf_certificado } = requisicao.body;
    const sql = 'UPDATE certificados SET instituicao = ?, duracao = ?, descricao = ?, imagem_certificado = ?, pdf_certificado = ? WHERE id = ?';

    try {
        await con.query(sql, [instituicao, duracao, descricao, imagem_certificado, pdf_certificado, requisicao.params.id]);
        resposta.send({ mensagem: `Certificado ${requisicao.params.id} atualizado com sucesso.` });
    } catch (err) {
        console.error('Erro ao atualizar certificado:', err);
        resposta.status(500).send('Erro ao atualizar certificado.');
    }
});

app.delete('/certificados/:id', async function(requisicao, resposta) {
    const sql = 'DELETE FROM certificados WHERE id = ?';

    try {
        await con.query(sql, [requisicao.params.id]);
        resposta.send({ mensagem: `Certificado ${requisicao.params.id} excluído com sucesso.` });
    } catch (err) {
        console.error('Erro ao excluir certificado: ', err);
        resposta.status(500).send('Erro ao excluir certificado.');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado com sucesso na porta 3000');
}).on('error', (err) => {
    console.error('Erro ao iniciar o servidor:', err.message);
});
