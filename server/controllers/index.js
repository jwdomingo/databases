var models = require('../models');
var mysql = require('mysql');
var db = require('./../db/index.js');

db.connection.connect();

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },

    post: function (req, res) {

      mysql.query();

      // db.

    // connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
 
//   console.log('The solution is: ', rows[0].solution);
// });


    }
  }
};