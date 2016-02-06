var models = require('../models');
var mysql = require('mysql');
var db = require('./../db');

db.connection.connect();

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) { throw err; };
        res.send(data);
      });
    },

    post: function (req, res) {
      // Add entry into MESSAGES table
      // Retrieve message's unique ID and pass data to model handlers
      var sql = 'INSERT INTO messages SET ?'
      db.connection.query(sql, req.body, function(err, rows, fields) {
        if (err) { throw err; };
        console.log('MESSAGE posted with insertID:', rows.insertId);
        res.end();
      });
    }
  },

  users: {
    get: function (req, res) {
      // Fetch users from database
      // Send data containing usernames + IDs to model handlers
      console.log('GET USERS!!!!!!!!!');
      var sql = 'SELECT username FROM users WHERE username = ?';
      db.connection.query(sql, req.body, function(err, rows, fields) {
        if (err) { throw err; };
        res.end();
      });
    },

    post: function (req, res) {
      // Add entry to USERS table
      // Retrieve user's unique ID and pass data to model handlers
      var sql = 'INSERT INTO users SET ?'
      db.connection.query(sql, req.body, function(err, rows, fields) {
        if (err) { throw err; };
        console.log('USER posted with insertID:', rows.insertId);
        res.end();
      });
    }
  }
};
