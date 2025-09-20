const express = require('express');
const router = express.Router();


router.get('/:utilisateur', (req, res) => {

    res.send(`L'utilisateur : ${req.params.utilisateur} est connecté`)
});



module.exports = router;