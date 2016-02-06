var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var sql = 'SELECT * FROM messages';
      db.connection.query(sql, function(err, rows, fields) {
        if (err) { throw err; }
        callback(err, rows);
      });
    },
    post: function (message, callback) {
      var sql = 'INSERT INTO messages SET ?';
      db.connection.query(sql, message, function(err, rows, fields) {
        if (err) { throw err; }
        callback(err, rows.insertID);
      });
    }
  },

  users: {
    get: function (callback) {

    },
    post: function (username, callback) {
      var sql = 'INSERT INTO users SET ?'
      db.connection.query(sql, username, function(err, rows, fields) {
        if (err) { throw err; };
        callback(err, rows.insertId);
      });
    }
  }
};
