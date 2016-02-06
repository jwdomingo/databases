var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var sql = 'SELECT * FROM messages';
      return db.connection.query(sql, function(err, rows, fields) {
        if (err) { throw err; }
        callback(err, rows);
      });
    },
    post: function (req, callback) {
      var sql = 'INSERT INTO messages SET ?';
      db.connection.query(sql, req.body, function(err, rows, fields) {
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
