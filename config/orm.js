var connection = require('./connection.js');

var orm = {
    all: function (tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            cb(result)
        })
    },

    //update function

    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ?? SET devoured=true WHERE id=?', [tableInput, condition], function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;