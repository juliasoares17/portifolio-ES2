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
    resposta.render('projetos', {
    })
})

app.get('/certificados', function(requisicao, resposta){
    resposta.render('certificados', {
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