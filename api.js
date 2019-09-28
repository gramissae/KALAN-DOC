const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const examples = require('./settings/json_examples');
const settings = require('./settings/secure');
var _ = require('express-jwt');

//Hello Bro
router.get('/', async(req,res) => {
    res.json("hello bro");
});

router.get('/travel/:id', async(req, res) => {
    try{
        if(typeof req.params.id !== "undefined" && req.params.id !== '' && typeof req.params.id === "string"){
            let validate = await examples.response.travel.filter((value) => {
                if(value.id === req.params.id){
                    return value
                }
            });
        if(validate.length > 0){
            res.json(validate);
        }else{
            throw "No se encontraron coincidencias"
        }}else{
            throw "Valor Invalido"
        }
    }catch(error){
        res.json({error: error});
    }
});

router.get('/store/:id', async(req, res) => {
    try{
        if(typeof req.params.id !== "undefined" && req.params.id !== '' && typeof req.params.id === "string"){
            let validate = await examples.response.stores.filter((value) => {
                if(value.store === req.params.id){
                    return value
                }
            });
        if(validate.length > 0){
            res.json(validate);
        }else{
            throw "No se encontraron coincidencias"
        }}else{
            throw "Valor Invalido"
        }
    }catch(error){
        res.json({error: error});
    }
});

// Validamos token
router.get('/validate_token', async(req,res)=> {
    try {
        if(req.headers.authorization && typeof JSON.parse(req.headers.authorization) === "object"){
            const validate = await jwt.verify(JSON.parse(req.headers.authorization).token, settings.secret);
            res.json(validate);
        }else{
            throw "No se detecto token"
        }
        
    }catch(error){
        res.json({error: error});
    }
});

/*
    Esta seccion muestra ejemplo de generacion de Token con los archivos involucrados
        - secure.js
        - index.js
    Usando la base de JWT con protocolo default (SHA-256).

    # Mas info en  => https://jwt.io
    # Se recomienda leer http://www.passportjs.org/ o https://oauth.net/2/

*/
router.get('/login_token', async (req,res) => {
    try{
        if (req.headers.authorization && typeof JSON.parse(req.headers.authorization) === "object"){
        let data = JSON.parse(req.headers.authorization);

        if(data.user === '' || data.apikey ==='' ||typeof data.user === "undefined" || typeof data.apikey === "undefined"){
            throw "Faltan requisitos"
        }else{

        let signature = new Object({
            //Posible añadir mas elementos a transporta pero agrega extencion al token final
            //No recomendado jwt con cookies
            name: data.user,
            id: data.apiKey
        });

        const token = await jwt.sign(signature,settings.secret);
        //Secret de secure es "test"
        res.json({
            apiKey: data.apiKey,
            token: token, 
            secure: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2ciOiJMb3MgZWxvdGVzIHRpZW5lbiBtYWl6IDpPIn0.cFULH-rNxfumSMG10zEfXlIHfYANN5fWYp0UDLpvL9A"
        });
    }}else{
        throw "Requisitos invalidos"    
    }
    }catch(error){
        res.json(error);
    }
});

module.exports = router;