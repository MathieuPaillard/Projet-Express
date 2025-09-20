const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Vous êtes en ce moment sur la racine du site web.")
})

module.exports = router;