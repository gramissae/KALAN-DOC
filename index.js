/* En este archivo realizare un servidor de muestra */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
var ip = require('ip');

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use('/api', require('./api'));

app.listen(app.get('port'), () => {
    console.log('\x1b[32m%s\x1b[0m', `\nIngrese a LOCAL HTTP: http://${ip.address()}:${app.get('port')}\n`)
});

