const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

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

app.get('/projetos', function(requisicao, resposta){
    var nome_projeto_1 = 'Mestre Ágil'
    var nome_projeto_2 = 'IdScan'
    var nome_projeto_3 = 'InsightFlow'
    var nome_projeto_4 = 'PSW-12'
    resposta.render('projetos', {
        nome_projeto_1: nome_projeto_1,
        nome_projeto_2: nome_projeto_2,
        nome_projeto_3: nome_projeto_3,
        nome_projeto_4: nome_projeto_4
    })
})

app.get('/certificados', function(requisicao, resposta){
    var certificado_1 = 'Alura'
    var certificado_2 = 'Hashtag Treinamentos'
    var certificado_3 = 'Senai "Santos Dumont"'
    resposta.render('certificados', {
        certificado_1: certificado_1,
        certificado_2: certificado_2,
        certificado_3: certificado_3
    })
})

app.listen(3000, function(erro){
    if (erro){
        console.log('Ocorreu um erro')
    }
    else{
        console.log('Servidor iniciado com sucesso')
    }
}) 