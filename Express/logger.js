function logger(req, res , next) {
    console.log(
        `requête reçue pour ${req.url} le ${new Date().toLocaleString("fr-FR")}`
    )
    next()
}

module.exports = { logger }