var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '',
    password : '',
    database : 'florinvault',
    multipleStatements: true
});

module.exports = connection;
