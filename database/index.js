const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yelpest'
});



module.exports = {
  connection: connection
};
