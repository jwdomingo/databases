var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {

      var sql = 'SELECT m.id, m.message, m.username AS userID, u.username, m.roomname FROM messages AS m INNER JOIN users AS u ON m.username = u.id';

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
