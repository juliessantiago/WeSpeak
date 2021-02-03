module.exports = function(app){
    app.get('/', function(request, response){//
        //o controller que fará o render 
        //Aqui será necessário apenas recuperar a função exportada pelo controller
        app.app.controllers.index.controla_index(app, request, response)//3 parâmetros esperados pelo controller
        //controla_index - função criada no controller 
        //1º app: instância do objeto do express
        //2º app: diretório 
    })
}