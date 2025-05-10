const mysql = require('mysql2/promise');

const connexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'missie'
});

connexion.getConnection()
    .then(() => {
        console.log('Connection to MySQL database established successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MySQL database:', err);
    });

module.exports = connexion;
