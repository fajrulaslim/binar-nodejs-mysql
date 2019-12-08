// database mysql
var mysql = require('mysql');

// koneksi database
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'cms_nodejs',
    user: 'root',
    password: ''
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Koneksi dengan id ' + connection.threadId);
    }
});


module.exports = connection;