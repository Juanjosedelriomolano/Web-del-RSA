// Funciones para cálculos RSA

// Calcular n = p * q
function calculateN(p, q) {
    return p * q;
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
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10,
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19,
        'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26, ' ': 0
    };
    const convertedArray = text.toUpperCase().split('').map(char => alphabetMap[char] || '');
    const convertedText = convertedArray.join('');
    return { convertedText, convertedArray };
}

module.exports = {
    calculateN,
    calculateE,
    calculateD,
    convertTextToNumbers
};
