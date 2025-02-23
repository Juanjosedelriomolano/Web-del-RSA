const mysql = require('mysql2');


const DB_Host = process.env.DB_Host || 'localhost';
const DB_User = process.env.DB_Usuer || 'root';
const DB_Password = process.env.DB_Password || 'admin';
const DB_Name = process.env.DB_Name || 'rsa';
const DB_Port = process.env.PORT || 3306;


// Crear conexión con el usuario base predeterminado
const db = mysql.createConnection({
    host: DB_Host,
    user: DB_User,
    password: DB_Password, // Agrega tu contraseña aquí si tienes configurada una
    database: DB_Name,
    port: DB_Port
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1); // Detener ejecución si hay un error
    }
    console.log('Conexión a la base de datos establecida correctamente');
});

module.exports = db;
