const { emit } = require("../../config/server");

module.exports.inicia_chat = function(app, request, response){
    var dados = request.body; //dados estão sendo colocados na req com o body-parser
    //Tanto body-parser como express-validator funcionam através do REQUEST 

    request.assert('apelido', 'Campo não pode estar vazio').notEmpty(); 
      //1º parâmetro: name do campo 
      //2º parâmetro: mensagem de erro
    var erros = request.validationErrors(); 
    if (erros){
        response.render('index.ejs', {validacao: erros})
    }

    app.get('io').emit(
      'mensagemParaCliente', //evento de aviso quando user entra no chat 
      {
        apelido: dados.apelido, 
      }
    ) //método emit tem dois parâmetros: evento a ser disparado, estrutura de dados qualquer 
    //a estrutura de dados é recebida lá do lado do cliente através do parâmetro da função de callback do método ON
    
  
    response.render('chat.ejs', {dadosFormulario: dados }); //passando JSON com dados do formulário
    //para poder recuperar o nome da pessoa que entrou na página do chat 
}

