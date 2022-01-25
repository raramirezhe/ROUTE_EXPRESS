// RAMÓN RAMÍREZ HERNÁNDEZ - 16400981 - NL:20
var express = require('express');
//Instanciamos el objeto express
var app = express();
//ruteo index.html
app.get(
    '/',function(req,res){
        res.sendFile(__dirname+'/public/index.html');
    }
);
// ruteo contactos.html
app.get(
    '/contactos',function(req,res){
        res.sendFile(__dirname+'/public/contactos.html');
    }
);
app.listen(8000);
console.log("Server inicializando via Express.")