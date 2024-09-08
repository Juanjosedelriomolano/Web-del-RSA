const express = require('express');
const app = express();
const path = require('path');

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Ruta para calcular n = p * q
app.post('/calculate', (req, res) => {
    const { p, q } = req.body;
    const n = p * q;
    res.json({ n });
});

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));
