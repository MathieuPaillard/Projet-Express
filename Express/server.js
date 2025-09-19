const express = require('express');
const { logger } = require('./logger');

const app = express();
const port = 3000;

app.use(logger)

app.get('/', (req, res) => {
  res.send('Bonjour tout le monde !');
});

// 1st route: /bonjour
app.get('/bonjour', (req, res) => {
  res.send('Bonjour le monde!');
});


// 2nd route: /name

app.get('/user/:name' , (req, res) => {
  const name = req.params.name;
  res.send(`Bienvenue, ${req.params.name}!`);

});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
