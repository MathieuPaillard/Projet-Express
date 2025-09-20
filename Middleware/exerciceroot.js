const express = require('express')
const app = express()
const { query, validationResult } = require('express-validator')
const port = 3000


app.use(express.json())

app.get('/', (req, res, next) => {
    res.send('Vous êtes à la racine du projet !')
})

app.get('/bonjour', query('name').notEmpty(), (req, res) => { // http://localhost:3000/bonjour?name=Mathieu exemple de root
    const result = validationResult(req);
    if (result.isEmpty()) {
        res.send(`Bonjour, ${req.query.name} !`)
    } else {
        res.send({ errors: result.array() })
    }
})

app.get('/user{/:id}', (req, res, next) => {
    const userId = req.params.id
    if (userId) {
        return res.send(`L'utilisateur connecté est : ${userId} !`)
    }
    res.send("Aucun utilisateur n'est connecté ! Un user par défault a été créé !")

})

app.listen(port, () => {
    console.log(`Vous venez de vous connecter au port: ${port}`)


})