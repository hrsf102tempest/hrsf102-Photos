const express = require('express');
const app = express();
const db = require('../database/index.js');
const PORT = 3002;

app.use(express.static('../public'));

app.get('/businesses/:busId', (req, res) => {
  console.log(`Received request from client for business ID ${req.params.busId}`);
  db.getBusinessPhotos(req.params.busId, (error, photos) => {
    if (error) {
      console.log('ERROR on server invoking getBusinessPhotos');
      res.status(500).send(error);
    } else {
      console.log('Server successfully invoked getBusinessPhotos');
      res.status(200).send(photos);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));