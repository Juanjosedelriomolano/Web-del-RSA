const rsaModel = require('../models/rsa');

// Ruta para calcular n
exports.calculateN = (req, res) => {
    const { p, q } = req.body;
    const n = rsaModel.calculateN(p, q);
    res.json({ n });
};

// Ruta para calcular e
exports.calculateE = (req, res) => {
    const { p, q } = req.body;
    if (!p || !q || p === q) {
        return res.status(400).json({ error: 'p y q deben ser primos diferentes' });
    }
    const possibleE = rsaModel.calculateE(p, q);
    res.json({ possibleE });
};

// Ruta para calcular d
exports.calculateD = (req, res) => {
    const { p, q, e } = req.body;
    if (!p || !q || !e || p === q) {
        return res.status(400).json({ error: 'p, q, y e deben ser válidos y p y q deben ser primos diferentes' });
    }
    const d = rsaModel.calculateD(p, q, e);
    if (d !== undefined) {
        res.json({ d });
    } else {
        res.status(500).json({ error: 'Error al calcular d' });
    }
};

// Nueva ruta para convertir texto a números
exports.convertText = (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'El mensaje está vacío' });
    }
    const { convertedText, convertedArray } = rsaModel.convertTextToNumbers(message);
    res.json({ convertedText, convertedArray });
};
