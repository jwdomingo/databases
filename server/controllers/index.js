var models = require('../models');
var mysql = require('mysql');
var db = require('./../db/index.js');

db.connection.connect();

module.exports = {
  messages: {
    get: function (req, res) {
      // var sql = 'SELECT * FROM messages';
      // db.connection.query(sql, function(err, rows, fields) {
      //   if (err) { throw error; };
      // });
    }, // a function which handles a get request for all messages

    post: function (req, res) {
      var sql = 'INSERT INTO messages SET ?'
      db.connection.query(sql, req.body, function(err, rows, fields) {
        if (err) { throw error; };
        console.log('MESSAGE posted with insertID:', rows.insertId);
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {
      var sql = 'INSERT INTO users SET ?'
      db.connection.query(sql, req.body, function(err, rows, fields) {
        if (err) { throw error; };
        console.log('USER posted with insertID:', rows.insertId);
        res.end();
      });
    }
  }
};
