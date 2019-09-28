/* En este archivo realizare un servidor de muestra */

const express = require('express');//Framework
const bodyParser = require('body-parser');//Json
const morgan = require('morgan');//http monitor 
const app = express();//Midleware
var engines = require('consolidate');//Motor html
var opn = require('opn');
var ip = require('ip');//Visualizar IP

//Modifica el numero y podras cambiar el puerto de salida recuerda que este puerto es default en los ejemplos
app.set('port', process.env.PORT || 8080);
//Las repuesta son parsificadas en JSon para su manejo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Genero motor de plantillas basados en HTML
app.engine('html', engines.mustache);
app.set("view engine","html");
//Imprimo operaciones http en consola
app.use(morgan('dev'));
//Carpeta de coumentos estatico ha mostrar
app.use(express.static('views'));
//Vinculo archivo que contiene rutas rest
app.use('/api', require('./api'));

//opn(`http://localhost:${app.get('port')}`);

//Inicio servicio
app.listen(app.get('port'), () => {
    console.log('\x1b[32m%s\x1b[0m', `\nIngrese a LOCAL HTTP: http://${ip.address()}:${app.get('port')}\n`);
});

