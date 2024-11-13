const rsaModel = require('../models/rsa');

// Ruta para calcular n
exports.calculateN = (req, res) => {
    const { p, q } = req.body;
    const n = rsaModel.calculateN(p, q);
    const z = rsaModel.calculateA(p, q);
    res.json({ n, z });
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
// Nueva ruta para cifrar números
exports.encryptNumbers = (req, res) => {
    const { numbers, e, n } = req.body;
    if (!numbers || !e || !n) {
        return res.status(400).json({ error: 'Números, e y n deben ser válidos' });
    }

    const encryptedNumbers = rsaModel.encryptNumbers(numbers, e, n);
    res.json({ encryptedText: encryptedNumbers });
};

// Nueva ruta para descifrar números
exports.decryptNumbers = (req, res) => {
    const { encryptedArray, d, n } = req.body;
    if (!encryptedArray || !d || !n) {
        return res.status(400).json({ error: 'El arreglo encriptado, d y n deben ser válidos' });
    }

    // Descifrar el arreglo de números
    const decryptedNumbers = rsaModel.decryptNumbers(encryptedArray, d, n);

    // Convertir los números descifrados a texto
    const decryptedText = rsaModel.convertNumbersToText(decryptedNumbers);

    // Enviar el resultado
    res.json({ decryptedText, decryptedNumbers });
};

exports.calculateMCD = (req, res) => {
    const { a, b } = req.body;
    const result = rsaModel.calculateMCD(a, b);
    res.json(result);
};

exports.calculateEE = (req, res) => {
    const { a, b } = req.body;
    const result1 = extendedEuclidean(a, b);
    console.log(result1); // Verifica si el resultado es correcto
    res.json(result1);
};
