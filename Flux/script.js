const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur de lecture du fichier", err)
    }
    
        const modifiedData = data.toUpperCase()
    
    
    fs.writeFile('output.txt', modifiedData, (err) => {
        if (err) {
            console.error("erreur d'écriture dans le fichier", err)
        } else {
            console.log("Données écrites avec succes dans le fichier output.txt !")
        }
    })
    fs.appendFile('input.txt', data ,(err,data)=>{
        if (err){console.error("Une erreur vient d'être récupérée !",err)}else{
            console.log("Complétion du fichier input réalisée avec succès.")
        }
    })
})



