const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Bonjour, vous êtes sur le site pouette pouette !")
})

module.exports =router;