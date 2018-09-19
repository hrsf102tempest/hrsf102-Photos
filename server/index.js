const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/biz/', express.static(path.join(__dirname, '/../client/dist')));

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
