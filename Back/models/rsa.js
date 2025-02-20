// Funciones para cálculos RSA

// Calcular n = p * q
function calculateN(p, q) {
    return p * q;
}

// Calcular a = (p-1) * (q-1)
function calculateA(p, q) {
    return (p-1) * (q-1);
}

// Calcular valores posibles de 'e'
function calculateE(p, q) {
    const phi = (p - 1) * (q - 1);
    const gcd = (a, b) => {
        if (!b) return a;
        return gcd(b, a % b);
    };

    const possibleE = [];
    for (let e = 2; e < phi; e++) {
        if (gcd(e, phi) === 1) {
            possibleE.push(e);
        }
    }

    return possibleE;
}

// Calcular d usando el algoritmo extendido de Euclides
function calculateD(p, q, e) {
    const phi = (p - 1) * (q - 1);

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

    return modInverse(e, phi);
}

// Nueva función para convertir texto a números
function convertTextToNumbers(text) {
    const alphabetMap = {
        'A': 1,  'B': 2,  'C': 3,  'D': 4,  'E': 5,  'F': 6,  'G': 7,  'H': 8,  'I': 9,  'J': 10,  
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20,  
        'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26, ' ': 0
    };
    // Convertimos cada carácter a su valor correspondiente o 0 si no está en el mapa
    const convertedArray = text.toUpperCase().split('').map(char => {
        return alphabetMap.hasOwnProperty(char) ? alphabetMap[char] : 0;
    });

    const convertedText = convertedArray.join(''); // Cadena completa de números para mostrar
    return { convertedText, convertedArray };
}

// Función para encriptar un número usando el algoritmo RSA con BigInt
function encryptNumber(number, e, n) {
    return BigInt(number) ** BigInt(e) % BigInt(n); // Usar BigInt para operaciones grandes
}

// Función para cifrar un arreglo de números
function encryptNumbers(numbers, e, n) {
    return numbers.map(number => Number(encryptNumber(number, e, n))); // Convertir de nuevo a número normal si es necesario
}

// Función para descifrar un número usando RSA con BigInt
function decryptNumber(encryptedNumber, d, n) {
    return BigInt(encryptedNumber) ** BigInt(d) % BigInt(n); // Usar BigInt para operaciones grandes
}

// Función para descifrar un arreglo de números
function decryptNumbers(encryptedArray, d, n) {
    return encryptedArray.map(encryptedNumber => Number(decryptNumber(encryptedNumber, d, n))); // Convertir de nuevo a número normal si es necesario
}

// Función para convertir números descifrados a texto
function convertNumbersToText(numbersArray) {
    const alphabetMap = {
        1: 'a',  2: 'b',  3: 'c',  4: 'd',  5: 'e',  6: 'f',  7: 'g',  8: 'h',  9: 'i', 10: 'j',  
        11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't',  
        21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z', 0: ' '
    };

    return numbersArray.map(number => alphabetMap[number] || '?').join('');
}

function calculateMCD(a, b) {
    let steps = [];
    while (b !== 0) {
        let quotient = Math.floor(a / b);
        let remainder = a % b;
        steps.push(`Divide ${a} entre ${b}. El cociente es ${quotient} y el residuo es ${remainder}`);
        steps.push(`${a} = ${b} (${quotient}) + ${remainder}.`);
        a = b;
        b = remainder;
    }
    steps.push(`El último residuo no nulo es ${a}, por lo que MCD(a, b) = ${a}`);
    return { mcd: a, process: steps };
}



module.exports = {
    calculateN,
    calculateA,
    calculateE,
    calculateD,
    convertTextToNumbers,
    encryptNumbers,
    decryptNumbers,
    convertNumbersToText,
    calculateMCD,
};
