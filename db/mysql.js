const mysql = require('mysql2/promise');
const dotenv = require("dotenv").config();

const connexion = mysql.createPool({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME 
});

connexion.getConnection()
    .then(() => {
        console.log('Connection to MySQL database established successfully!');
    })
    .catch((err) => {
        console.error('Error connecting to MySQL database:', err);
    });

module.exports = connexion;
