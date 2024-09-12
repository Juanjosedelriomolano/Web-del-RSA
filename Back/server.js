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

// Nueva ruta para calcular los valores de 'e'
app.post('/calculateE', (req, res) => {
    const { p, q } = req.body;

    if (!p || !q || p === q) {
        return res.status(400).json({ error: 'p y q deben ser primos diferentes' });
    }

    const phi = (p - 1) * (q - 1);
    const gcd = (a, b) => {
        if (!b) return a;
        return gcd(b, a % b);
    };

    // Buscar valores posibles para 'e' que sean coprimos con φ(n)
    const possibleE = [];
    for (let e = 2; e < phi; e++) {
        if (gcd(e, phi) === 1) {
            possibleE.push(e);
        }
    }

    res.json({ possibleE });
});

// Ruta para calcular d usando el Algoritmo Extendido de Euclides
app.post('/calculateD', (req, res) => {
    const { p, q, e } = req.body;

    if (!p || !q || !e || p === q) {
        return res.status(400).json({ error: 'p, q, y e deben ser válidos y p y q deben ser primos diferentes' });
    }

    const phi = (p - 1) * (q - 1);

    // Función para encontrar el inverso multiplicativo usando el algoritmo extendido de Euclides
    function modInverse(a, m) {
        let [m0, x0, x1] = [m, 0, 1];
        if (m === 1) return 0;
        while (a > 1) {
            let q = Math.floor(a / m);
            [m, a] = [a % m, m];
            [x0, x1] = [x1 - q * x0, x0];
        }
        if (x1 < 0) x1 += m0;
        return x1;
    }

    const d = modInverse(e, phi);
    if (d !== undefined) {
        res.json({ d });
    } else {
        res.status(500).json({ error: 'Error al calcular d' });
    }
});

// Ruta para convertir el mensaje a números ASCII
app.post('/convertMessage', (req, res) => {
    const { message, n } = req.body;

    // Verificar que el mensaje y el valor de n estén presentes
    if (typeof message !== 'string' || !n) {
        return res.status(400).json({ error: 'Mensaje o valor de n no proporcionado' });
    }

    // Verificar si el tamaño del mensaje supera n
    if (message.length > n) {
        return res.status(400).json({ error: 'El mensaje es demasiado largo para el valor de n' });
    }

    // Convertir el mensaje a valores ASCII
    const asciiMessage = message.split('').map(char => char.charCodeAt(0)).join('');
    res.json({ asciiMessage });
});


// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en http://localhost:${PORT}`));

