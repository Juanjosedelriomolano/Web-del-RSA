const mysql = require('mysql2');

// Crear conexión con el usuario base predeterminado
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', // Agrega tu contraseña aquí si tienes configurada una
    database: 'rsa',
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
