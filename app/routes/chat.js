module.exports = function(app){
    app.post('/chat', function(request, response){
        app.app.controllers.chat.inicia_chat(app, request, response)
    })
}//via post porque vai ser submetido um formulário com dados

