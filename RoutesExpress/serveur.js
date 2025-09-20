const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const userRouter = require('./routes/utilisateur')
const helloRouter = require('./routes/bonjour')

app.use('/',indexRouter);
app.use('/user',userRouter);
app.use('/bonjour',helloRouter);

app.listen(port,()=>{
    console.log(`Serveur en écoute sur localhot: ${port}`)
});