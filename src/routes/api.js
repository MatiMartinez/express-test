'use strict'
const api = require('express').Router()

module.exports = (()=>{
    api.all('*', function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
    });

    api.get('/',(req,res,next)=>res.send({
        message : 'API adios'
    }))
    return api;
})()
