const { error } = require('console')
const fs = require('fs')

const readStream = fs.createReadStream('grandFichie.txt')

const writeStream = fs.createWriteStream('copieGrandFichier.txt')

readStream.pipe(writeStream)

readStream.on('error', (err)=>{
    console.error('Erreur de lecture du fichier',err)
})
writeStream.on('error',(err)=>{
    console.error("Erreur lors de l'écriture du fichier" , err)
})
writeStream.on('finish',()=>{
    console.log("Copie terminée avec succès !")
})