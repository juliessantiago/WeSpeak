/*Importando configurações do servidor*/ 

var app = require('./config/server')
const { request } = require('express')


/*Parametrizando a porta que o servidor irá escutar*/ 
var server = app.listen(3000, function(){ //dentro de uma variável para usar no socket.io
    console.log('Servidor online')
})

var io = require('socket.io').listen(server) 
app.set('io', io); //set é método do express 
//colocando a variável "io" dentro do objeto do express 

io.on('connection', function(conexao){ //connection é um evento padrão do Socket.io
    console.log('Usuário conectou-se'); 

    conexao.on('disconnect', function(){ //disconnect também é evento padrão do Socket.io
        console.log('Usuário desconectou-se'); 
    })

    conexao.on('mensagemParaServidor', function(dado){ //Recebendo mensagem do cliente 
        conexao.emit('mensagemChat', //devolvendo resposta ao cliente 
            {
                apelido: dado.apelido, 
                mensagem: dado.mensagem
            }
        );
        conexao.broadcast.emit('mensagemChat', //devolvendo resposta a todos no chat (exceto cliente que enviou) 
            {
                apelido: dado.apelido, 
                mensagem: dado.mensagem
            }
        );
    })
}) 