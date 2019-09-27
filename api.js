const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const settings = require('./settings/secure');
var _ = require('express-jwt');

router.get('/login_token', async (req,res) => {
    try{
        let signature = new Object({
            name: "myname",
            id: "client"
        });

        const token = await jwt.sign(signature,settings.provider_key);
        res.json({token: token})
    }catch(error){
        res.json(error);
    }
});

module.exports = router;