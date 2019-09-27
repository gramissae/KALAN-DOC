/* En este archivo realizare un servidor de muestra */

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
var engines = require('consolidate');
var opn = require('opn');
var ip = require('ip');

app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', engines.mustache);
app.set("view engine","html");
app.use(morgan('dev'));

app.use(express.static('views'));

app.use('/api', require('./api'));

//opn(`http://localhost:${app.get('port')}`);

app.listen(app.get('port'), () => {
    console.log('\x1b[32m%s\x1b[0m', `\nIngrese a LOCAL HTTP: http://${ip.address()}:${app.get('port')}\n`);
});

