require('dotenv').config();
const mysql = require('mysql2');

const urlDB = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
console.log('DB_NAME:', process.env.DB_NAME);
const connection = mysql.createConnection(urlDB);

const dbConnection = mysql.createConnection(urlDB);

connection.connect((err) => {
    if(err){
        console.error('Connection error:', err);
        return;
    }
    console.log("Connection was a success");
});

dbConnection.connect((err) => {
    if(err){
        console.error('DB Connection error:', err);
        return;
    }
    console.log("DB connection was a success");
});

module.exports = {connection, dbConnection};