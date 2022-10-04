const {Router} = require('express')
const router=Router()
const express = require("express");
const {fork}=require('child_process')

router.use(express.json());
router.use(express.urlencoded({extended: true}));



const randomNumbersGenerator= fork('./utils/functions/random')

router.get('/randoms', (req, res) => {
    const cant =parseInt(req.query.cant) || 5000;
    randomNumbersGenerator.send(cant); 
    randomNumbersGenerator.on('message', (result) => {
       res.end('resultado:' +result)
    })

})

module.exports= router;