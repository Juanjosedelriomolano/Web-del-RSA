const express = require('express');
const path = require('path');
const rsaController = require('./controllers/rsacontroller.js');
const db = require('./config/database'); // Importar conexión a la base de datos

const app = express();

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Rutas para registro y login
app.post('/register', rsaController.registerUser);
app.post('/login', rsaController.loginUser);

// Rutas
app.post('/calculate', rsaController.calculateN);
app.post('/calculateE', rsaController.calculateE);
app.post('/calculateD', rsaController.calculateD);
app.post('/convertText', rsaController.convertText);
app.post('/encrypt', rsaController.encryptNumbers);
app.post('/decrypt', rsaController.decryptNumbers);
app.post('/calculateMCD', rsaController.calculateMCD);
app.post('/calculateEE', rsaController.calculateEE);
app.post('/evalusave', rsaController.evalusave);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
