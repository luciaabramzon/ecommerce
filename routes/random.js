const {Router} = require('express')
const router=Router()
const express = require("express");
const {fork}=require('child_process')
require('../log4js')
const log4js=require('log4js')
const logger=log4js.getLogger()

router.use(express.json());
router.use(express.urlencoded({extended: true}));



const randomNumbersGenerator= fork('./utils/functions/random')

router.get('/randoms', (req, res) => {
    const cant = parseInt(req.query.cant)
    
    if(isNaN(cant)){
        logger.log('error','Valor no numerico')
        res.status(400).send('valor no numerico')
    }
    else{
        randomNumbersGenerator.send(cant); 
        randomNumbersGenerator.on('message', (result) => {
           res.end('resultado:' +result)
        })
    
    }

})

module.exports= router;