const express = require('express');
const app = express();
const port = 3000;


const addRequestId = (req,res,next) =>{
    req.requestId = Math.floor(Math.random()*1000)
    next()
}
const checkOfficeHours = (req,res,next)=>{
    const currentHour = new Date().getHours()
    req.isOfficeHours = currentHour >= 9 && currentHour <=17
    next()
}
app.use (addRequestId)
app.use(checkOfficeHours)

app.get('/', (req, res) => {
    if(req.isOfficeHours){res.send('Hello Vous êtes connectés pendant les heures de bureau!')}
    else{res.send(`Hello Vous n'êtes pas connectés pendant les heures de bureau !`)}
    
});

app.get('/status', (req,res)=>{
    res.json({ message: 'Heures de bureau', isOfficeHours: req.isOfficeHours})
})

app.get('/requestId', (req, res) => {
    res.send(`Request ID: ${req.requestId}`)
})







app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
