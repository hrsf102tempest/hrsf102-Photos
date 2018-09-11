const db = require('./index.js');
const fecData = require('./FECData.js');
const faker = require('faker');
const moment = require('moment');

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

seedBusinesses = () => {
  let businesses = [];

  for (let i = 0; i < 150; i++) {
    let business = fecData.businessData[i];
    let id = business.id;
    let name = business.name;
    let takes_reservation = getRandomInt(0, 2);

    businesses.push([id, `${name}`, takes_reservation]);
  }

  db.connection.query('INSERT INTO businesses VALUES ?', [businesses], (error, results) => {
    if (error) {
      console.log('ERROR inserting business records into the businesses table', error);
    } else {
      console.log(`Successfully inserted ${results.affectedRows} records into the businesses table!`);
    }
  });
};

seedUsers = () => {
  let users = [];

  for (let i = 1; i <= 300; i++) {
    let id = i;
    let name = faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.';
    let is_owner = getRandomInt(0, 2);
    let friends = getRandomInt(0, 3001);
    let reviews = getRandomInt(0, 3001)
    let elite_status = getRandomInt(0, 2);

    users.push([id, `${name}`, is_owner, friends, reviews, elite_status]);
  }

  db.connection.query('INSERT INTO users VALUES ?', [users], (error, results) => {
    if (error) {
      console.log('ERROR inserting user records into the users table', error);
    } else {
      console.log(`Successfully inserted ${results.affectedRows} records into the users table!`);
    }
  });
};



seedPhotos = () => {
  let photos = [];

  for (let i = 1; i <= 1050; i++) {
    let id = i;
    let bus_id = getRandomInt(1, 151);
    let user_id = getRandomInt(1, 301);
    let description = faker.lorem.sentence();
    let link = fecData.photoData[getRandomInt(0, 10)];
    let date = moment(faker.date.past()).format("YYYY-MM-DD");
    let helpful = getRandomInt(0, 11);
    let not_helpful = getRandomInt(0, 6);

    photos.push([id, bus_id, user_id, `${description}`, `${link}`, `${date}`, helpful, not_helpful]);
  }

  db.connection.query('INSERT INTO photos VALUES ?', [photos], (error, results) => {
    if (error) {
      console.log('ERROR inserting photo records into the photos table', error);
    } else {
      console.log(`Successfully inserted ${results.affectedRows} records into the photos table!`);
    }
  });
};

seedBusinesses();
seedUsers();
seedPhotos();

db.connection.end(function(err) {
  console.log('The connection is terminated now');
});
