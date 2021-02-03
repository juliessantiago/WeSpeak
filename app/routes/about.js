module.exports = function(app){
    app.get('/about', function(request, response){
        app.app.controllers.about.controller_about(app, request, response)
    })
}