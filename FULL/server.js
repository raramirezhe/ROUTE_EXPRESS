// RAMÓN RAMÍREZ HERNÁNDEZ - 16400981 - NL:20
var express = require('express');
var bodyParser = require('body-parser');
//Instanciamos el objeto express
var app = express();
//Enviar parámetros por medio del formulario 
app.use(bodyParser.urlencoded({extended:false}));
//ruteo index.html
app.get(
    '/',function(req,res){
        res.sendFile(__dirname+'/public/index.html');
    }
); 

app.post(
    '/login',function(req,res){
        var user_name = req.body.user;
        var password =  req.body.password;
        console.log("El nombre de usuario es: "+user_name+"\nPassword: "+password);
        res.end('Envío finalizado');
    }

);

app.listen(9000);
console.log("Server inicializando FULL.")