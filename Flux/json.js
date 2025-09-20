const fs = require('fs')

fs.readFile('config.json','utf8',(err,data)=>{
    if (err){console.error("Erreur lors de la lecture du fichier json",err)
        return;
    }
    
const config = JSON.parse(data);
console.log("Nom de l'application :" , config.appName);
console.log("Version : ",config.version);
console.log("port : " , config.port);
console.log('Configuration de la base de données :' , config.database);

})

