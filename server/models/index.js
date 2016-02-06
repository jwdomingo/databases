var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('MODELS RECIEVES RE#UEST');
      var sql = 'SELECT * FROM messages';
      return db.connection.query(sql, function(err, rows, fields) {
        if (err) { throw err; }
        callback(err, rows);
      });
    },
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
