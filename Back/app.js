const express = require('express');
const path = require('path');
const rsaController = require('./controllers/rsacontroller.js');

const app = express();

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Rutas
app.post('/calculate', rsaController.calculateN);
app.post('/calculateE', rsaController.calculateE);
app.post('/calculateD', rsaController.calculateD);
app.post('/convertMessage', rsaController.convertMessage);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
