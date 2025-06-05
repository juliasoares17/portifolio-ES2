const { inserts } = require('./inserts');
var mysql = require('mysql2/promise');

async function start() {
const initCon = await mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Nana2016!',
    multipleStatements: true
});

try {
    await initCon.query(`CREATE DATABASE IF NOT EXISTS portifolio`);
    await initCon.end();

    const con = await mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'Nana2016!',
      database: 'portifolio',
      multipleStatements: true
    });

    await con.query(`
      CREATE TABLE IF NOT EXISTS certificados (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        instituicao VARCHAR(50) NOT NULL,
        duracao VARCHAR(60),
        descricao TEXT,
        imagem_certificado VARCHAR(150),
        pdf_certificado VARCHAR(150)
      );
    `); 
      console.log("Tabela 'certificados' criada.");

      await con.query(`
        CREATE TABLE IF NOT EXISTS projetos (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          titulo VARCHAR(100) NOT NULL,
          legenda VARCHAR(150),
          descricao_problema TEXT,
          descricao_desafios TEXT,
          descricao_solucoes TEXT,
          descricao_aprendizados TEXT,
          imagem_projeto VARCHAR(150),
          github_projeto VARCHAR(200),
          largura_imagem VARCHAR(10)
        );
      `); 
        console.log("Tabela 'projetos' criada.");

        await inserts(con);
        await con.end();
        console.log("✅ Conexão encerrada.");
      } catch (err) {
        console.error("❌ Erro durante criação do banco ou tabelas:", err);
      }
    }

start();
