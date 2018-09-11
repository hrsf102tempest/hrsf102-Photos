DROP DATABASE IF EXISTS yelpest;

CREATE DATABASE yelpest;

USE yelpest;

CREATE TABLE businesses (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  takes_reservation TINYINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(75) NOT NULL,
  is_owner TINYINT NOT NULL,
  friends SMALLINT NOT NULL,
  reviews INT NOT NULL,
  elite_status TINYINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE photos (
  id INT NOT NULL AUTO_INCREMENT,
  bus_id INT NOT NULL,
  user_id INT NOT NULL,
  description VARCHAR(255),
  link VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  helpful SMALLINT,
  not_helpful SMALLINT,
  PRIMARY KEY (id),
  FOREIGN KEY (bus_id) REFERENCES businesses (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
