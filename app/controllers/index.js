module.exports.controla_index = function(app, request, response){
    response.render('index.ejs', {validacao:{}}); //é necessário passar essa variável como parâmetro
    //porque existe um teste pelo express-validator na index 
}