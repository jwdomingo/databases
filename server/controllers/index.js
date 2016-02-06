var models = require('../models');
var mysql = require('mysql');
var db = require('./../db');

db.connection.connect();

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GETTING msg');
      models.messages.get(function(err, data) {
        if (err) { throw err; };
        res.send(data);
      });
    },

    post: function (req, res) {
      console.log('POSTING msg');
      models.messages.post(req.body, function(err, data) {
        if (err) { throw err; };
        res.send();
      });
    }
  },

  users: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) { throw err; };
        res.send(data);
      });

      // Fetch users from database
      // Send data containing usernames + IDs to model handlers
      // var sql = 'SELECT id FROM users WHERE username = ?';
      // db.connection.query(sql, req.body, function(err, rows, fields) {
      //   if (err) { throw err; };
      //   res.end();
      // });
    },

    post: function (req, res) {
      console.log('POST FRM USERS', req.body);
      models.users.post(req.body, function(err, data) {
        if (err) { throw err; };
        console.log('data',data);
        res.send(JSON.stringify(data));
      });

    //   // Add entry to USERS table
    //   // Retrieve user's unique ID and pass data to model handlers
    //   var sql = 'INSERT INTO users SET ?'
    //   db.connection.query(sql, req.body, function(err, rows, fields) {
    //     if (err) { throw err; };
    //     console.log('USER posted with insertID:', rows.insertId);
    //     res.end();
    //   });
    // res.end();
    }
  },

  rooms: {
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
