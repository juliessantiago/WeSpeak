/*importando o módulo do Express*/ 
var express = require('express'); 

/*importando módulo do consign*/ 
var consign = require('consign'); 

/*importando módulo do body-parser*/ 
var bodyParser = require ('body-parser'); 

/*importando o modulo do express-validator*/ 
var expressValidator = require('express-validator'); 

/*Iniciando o objeto do express*/ 
var app = express(); 

/*Setando as variáveis 'view engine' e 'views' do express*/ 
app.set('view engine', 'ejs')//indica qual engine fará processamento das views 
app.set('views', './app/views')//indica onde as views estão 

/*Configurando middleware express.static*/ 
app.use(express.static('./app/public'))//arquivos estáticos 

/*configurando middleware body-parser*/ 
app.use(bodyParser.urlencoded({extended: true}))

/*configurando middleware express-validator*/ 
app.use(expressValidator()); 


/*configurando os autoloads*/ 
consign()
.include('app/routes')
.then('app/controllers')
.then('app/models')//nota: views já estão a cargo do EJS 
.into(app)

/*Exportando o módulo*/ 
module.exports = app; 

