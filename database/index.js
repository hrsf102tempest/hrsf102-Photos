const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelpest'
});

getBusinessPhotos = (busId, callback) => {
  connection.query('SELECT * FROM photos WHERE bus_id = ?', [busId], (error, results) => {
    if (error) {
      console.log(`ERROR on database querying photos for business ID ${busId}`);
      callback(error);
    } else {
      console.log(`Successfully queried photos for business ID ${busId} on database!`);
      callback(null, results)
    }
  });
};

module.exports = {
  connection: connection,
  getBusinessPhotos: getBusinessPhotos
};
