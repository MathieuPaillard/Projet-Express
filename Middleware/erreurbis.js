const express = require('express')
const app = express()
port = 3000;


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}


const middleware1 = async (req, res, next) => {

    await wait(5000)
    console.log("Premier Call-Back")
    await wait(5000)
    next()


}

const middleware2 = (req, res) => {
    res.send("Nous sommes dans le deuxième Call-Back !")
}

app.get('/example', middleware1, middleware2)

app.get('/', (req, res, next) => {
    res.send('Vous êtes sur la page numéro une.')
})

app.get('/error/:name', (req, res, next) => {
    const error = new Error(`Ceci est une erreur ! N'est-ce pas monsieur ${req.params.name}`)
    error.status = 400
    next(error)
})
app.get('/not-found', (req, res, next) => {
    const error = new Error("Ceci est une erreur de rootage !")
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

app.listen(port, () => {
    console.log(`Connexion au localHost: ${port} réussi`)
})