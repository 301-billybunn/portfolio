'use strict';

// load dotenv to manage variables
require('dotenv').config();

// load express to do the heavy lifting of the server --- First, we have to require the package. When we require it, we make it's contents available to our app
const express = require('express');
// express is a collection of JS processes that do all the heavy-lifitn for our server
// see express documentation 'hello world'
const app = express();

// Establish the PORT number
const PORT = process.env.PORT || 3000;

// Tell express where to load our "html" files from
app.use(express.static('./public'));

// Create routes (paths) that the user can access the server from
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Billy needs autopilot'
  }

  response.status(200).json(airplanes);
});

app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
});

// Added catch-all to get routes that don't exist.
app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

// Turn the server on
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
