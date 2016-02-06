CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  message VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)/*,
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (roomID) REFERENCES rooms(id)*/
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
