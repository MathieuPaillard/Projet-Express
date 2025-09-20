const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    const error = new Error('quelque chose ne va pas !')
    error.status = 500
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    const message_erreur = res.json({
        error: {
            message: err.message
        }, status: err.status
    })
    console.log(message_erreur)
})

app.listen(port, () => {
    console.log(`Serveur Express en écoute sur http:/localhost:${port}`);
})