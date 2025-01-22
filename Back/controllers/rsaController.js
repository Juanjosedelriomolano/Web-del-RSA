const rsaModel = require('../models/rsa');
const db = require('../config/database'); // Conexión a la base de datos
const exteuc = require('../models/exteneuc');

// Ruta para registrar usuarios
exports.registerUser = (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).json({ error: 'Nombre de usuario, id y edad son obligatorios' });
    }
//aqui tengo que editar, tambien tengo que editar en la base de datos, este mensaje tambien tengo que borrarlo al finalizar
    const query = 'INSERT INTO usuarios (idu, nombre, edad) VALUES (?, ?, ?)';
    db.query(query, [id, name ,age], (err) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
        res.json({ success: true, message: 'Registro exitoso. Cambiando de vista...' });
    });
};

// Ruta para iniciar sesión
exports.loginUser = (req, res) => {
    const { id, name, age } = req.body;
    if (!id || !name || !age) {
        return res.status(400).json({ error: 'Nombre de usuario, id y edad son obligatorios' });
    }

    const query = 'SELECT * FROM usuarios WHERE idu = ? AND nombre = ? AND edad = ?';
    db.query(query, [id, name, age], (err, results) => {
        if (err) {
            console.error('Error al verificar el usuario:', err);
            return res.status(500).json({ error: 'Error al verificar el usuario' });
        }
        if (results.length > 0) {
            res.json({ success: true, message: 'Inicio de sesión exitoso. Cambiando de vista...' });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    });
};

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
    const { a, b, l } = req.body;
    const result1 = exteuc.extendedEuclidean(a, b, l);
    res.json(result1);
};