const mysql = require('mysql2');

const DB_Host = process.env.DB_Host || 'localhost';
const DB_User = process.env.DB_User || 'root';
const DB_Password = process.env.DB_Password || 'admin';
const DB_Name = process.env.DB_Name || 'rsa';
const DB_Port = process.env.PORT || 3306;

console.log("Intentando conectar a la base de datos con:");
console.log(`Host: ${process.env.DB_Host}`);
console.log(`Base de Datos: ${process.env.DB_Name}`);
console.log(`Usuario: ${process.env.DB_User}`);
console.log(`Puerto: ${process.env.DB_Port}`);

const db = mysql.createPool({
  host: DB_Host,
  user: DB_User,
  password: DB_Password,
  database: DB_Name,
  port: DB_Port,
  waitForConnections: true,
  queueLimit: 0  // Sin límite de peticiones en espera
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  }
});

module.exports = db;