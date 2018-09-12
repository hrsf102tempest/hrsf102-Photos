const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelpest',
});

const getBusinessPhotos = (busId, callback) => {
  const query = 'SELECT photos.id, photos.bus_id, photos.user_id, photos.description, photos.link, photos.date, photos.helpful, photos.not_helpful, users.name AS user_name, users.is_owner, users.friends, users.reviews, users.elite_status, businesses.name AS bus_name, businesses.takes_reservation FROM photos INNER JOIN users ON photos.user_id = users.id INNER JOIN businesses ON photos.bus_id = businesses.id WHERE bus_id = ?';
  connection.query(query, [busId], (error, results) => {
    if (error) {
      console.log(`ERROR on database querying photos for business ID ${busId}`);
      callback(error);
    } else {
      console.log(`Successfully queried photos for business ID ${busId} on database!`);
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getBusinessPhotos,
};
