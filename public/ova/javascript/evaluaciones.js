//El Módulo RSA (n) y la Elección de Números Primos
const preguntas = [
    {
        texto: "¿Qué propiedad define a un número primo?",
        opciones: [
            "A) Tiene más de dos divisores positivos.",
            "B) Es divisible por cualquier número mayor que 1.",
            "C) Es divisible por todos los números menores que él.",
            "D) Solo tiene dos divisores positivos: 1 y él mismo."
        ],
        correcta: 3,
        competenciaA: "Identifica correctamente la definición de un número primo como base para comprender la elección de “p” y “q” en RSA.",
        competenciaM: "Debe reforzar su comprensión sobre qué constituye un número primo y su relevancia en criptografía."
    },
    {
        texto: "¿Por qué el uso de números primos grandes es fundamental para la seguridad del sistema RSA?",
        opciones: [
            "A) Porque es más fácil realizar cálculos con ellos.",
            "B) Porque asegura que el módulo sea divisible por varios números.",
            "C) Porque aumenta la dificultad de factorizar el módulo “n”.",
            "D) Porque el algoritmo solo funciona con números grandes."
        ],
        correcta: 2,
        competenciaA: "Reconoce que la seguridad del sistema RSA depende de la dificultad de factorizar el módulo “n”, que se logra utilizando números primos grandes.",
        competenciaM: "Debe comprender que el tamaño de los números primos utilizados es directamente proporcional a la seguridad del sistema RSA."
    },
    {
        texto: "En el contexto de ejemplos educativos, ¿por qué se utilizan números primos pequeños en el estudio del algoritmo RSA?",
        opciones: [
            "A) Porque permiten garantizar la seguridad del sistema.",
            "B) Porque simplifican la comprensión del algoritmo sin sacrificar conceptos.",
            "C) Porque hacen que 'n' sea difícil de factorizar.",
            "D) Porque son los únicos números válidos en RSA."
        ],
        correcta: 1,
        competenciaA: "Comprende que los números primos pequeños facilitan el aprendizaje del algoritmo sin comprometer los conceptos fundamentales.",
        competenciaM: "Debe comprender que la elección de números pequeños en ejemplos educativos es una herramienta pedagógica y no refleja los usos reales del algoritmo."
    },
    {
        texto: "Menciona tres números primos de una sola cifra y tres de dos cifras.",
        opciones: [
            "A) Una cifra: 4, 6, 8 / Dos cifras: 12, 14, 16",
            "B) Una cifra: 2, 3, 5 / Dos cifras: 11, 13, 17",
            "C) Una cifra: 9, 1, 7 / Dos cifras: 21, 23, 25",
            "D) Una cifra: 2, 6, 9 / Dos cifras: 30, 33, 37"
        ],
        correcta: 1,
        competenciaA: "Memoriza y comprende el propósito de números primos pequeños como 2, 3, 5 (una cifra) y 11, 13, 17 (dos cifras) en contextos pedagógicos.",
        competenciaM: "Debe familiarizarse con los números primos pequeños y su utilidad al explicar el RSA de manera básica."
    },
    {
        texto: "¿Qué impacto tiene el uso de números primos de 2048 bits en el sistema RSA?",
        opciones: [
            "A) Incrementa el tamaño del módulo “n”, haciéndolo más difícil de factorizar.",
            "B) Disminuye la complejidad de la factorización de “n”.",
            "C) Hace que el sistema sea menos eficiente pero más fácil de hackear.",
            "D) Garantiza que los números primos sean siempre distintos."
        ],
        correcta: 0,
        competenciaA: "Entiende la relación entre el tamaño de los números primos y la seguridad del sistema RSA.",
        competenciaM: "Debe reforzar la importancia de usar números primos grandes para garantizar la robustez del sistema frente a ataques."
    }
];

let puntuacion = 0;
let preguntaActual;

function showDialog() {
    const modal = document.getElementById("questionModal");
    preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
    document.getElementById("pregunta").innerHTML = `<h3>${preguntaActual.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
    preguntaActual.opciones.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();

}

function closeDialog() {
    const modal = document.getElementById("questionModal");
    modal.close();
}

function validarRespuesta() {
    const seleccion = document.querySelector('input[name="respuesta"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual.correcta) {
        puntuacion++;
        document.getElementById("puntuacion").textContent = puntuacion;
    } else {
    }

    const container2 = document.getElementById('container2');
    container2.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog();
    mostrarResultados(respuesta);
}

function mostrarResultados(respuesta) {
    const preguntaR = document.getElementById("preguntaR");
    const respuestaDiv = document.getElementById("respuesta");
    const competencia = document.getElementById("competencia");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual.opciones[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual.opciones[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual.competenciaM}</p>`;    
    }
}

//Función Totiente de Euler (φ)
const preguntas1 = [
    {
        texto: "¿Qué calcula la Función Totiente de Euler &phi;(n)?",
        opciones1: [
            "A) La cantidad de divisores primos de “n”.",
            "B) El producto de los factores primos de “n”.",
            "C) El MCD de “n” y otro número.",
            "D) La cantidad de números menores que “n” que son coprimos con “n”."
        ],
        correcta: 3,
        competenciaA: "Entiende que φ(n) calcula la cantidad de números menores que “n” que no comparten factores primos con “n”.",
        competenciaM: "Debe reforzar el concepto de la función totiente y su relación con los números coprimos."
    },
    {
        texto: "¿Cómo se calcula &phi;(n) si “n” es el producto de dos números primos p y q?",
        opciones1: [
            "A) &phi;(n) = p × q",
            "B) &phi;(n) = p + q",
            "C) &phi;(n) = (p − 1) × (q − 1)",
            "D) &phi;(n) = (p − 1) + (q − 1)"
        ],
        correcta: 2,
        competenciaA: "Sabe aplicar correctamente la fórmula de la función totiente en el caso de que “n” sea el producto de dos números primos distintos.",
        competenciaM: "Debe comprender que φ(n) depende de la cantidad de números menores que “n” que son coprimos con él, calculados con esta fórmula."
    },
    {
        texto: "¿Qué significa que dos números sean coprimos?",
        opciones1: [
            "A) Son múltiplos de un número primo común.",
            "B) Tienen un MCD igual a 1.",
            "C) Tienen al menos un divisor común mayor que 1.",
            "D) Ambos números son primos."
        ],
        correcta: 1,
        competenciaA: "Reconoce que la coprimalidad se determina por un MCD igual a 1.",
        competenciaM: "Debe reforzar el concepto de coprimos como números que no comparten factores primos."
    },
    {
        texto: "En el algoritmo RSA, ¿cuál es la condición que debe cumplir el número “e” respecto a &phi;(n)?",
        opciones1: [
            "A) Debe ser un divisor de &phi;(n).",
            "B) Debe ser coprimo con &phi;(n).",
            "C) Debe ser igual a &phi;(n).",
            "D) Debe ser mayor que &phi;(n)."
        ],
        correcta: 1,
        competenciaA: "Entiende que “e” debe ser coprimo con φ(n) para garantizar que el sistema RSA funcione correctamente.",
        competenciaM: "Debe comprender la importancia de la coprimalidad de “e” con φ(n) en el diseño de claves RSA."
    },
    {
        texto: "¿Qué asegura la congruencia e × d ≡ 1 (MOD &phi;(n)) en el algoritmo RSA?",
        opciones1: [
            "A) Que “e” y “d” sean inversos modulares respecto a &phi;(n).",
            "B) Que “d” sea un múltiplo de “e”.",
            "C) Que “e” sea menor que “d”.",
            "D) Que “d” sea igual a &phi;(n)."
        ],
        correcta: 0,
        competenciaA: "Comprende que esta congruencia garantiza que “d” es el inverso modular de “e” respecto a φ(n), una relación clave para el cifrado y descifrado en RSA.",
        competenciaM: "Debe reforzar el concepto de inverso modular y su papel en el cálculo de la clave privada."
    }
];

let puntuacion1 = 0;
let preguntaActual1;

function showDialog1() {
    const modal = document.getElementById("questionModal1");
    preguntaActual1 = preguntas1[Math.floor(Math.random() * preguntas1.length)];
    document.getElementById("pregunta1").innerHTML = `<h3>${preguntaActual1.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones1");
    opcionesDiv.innerHTML = "";
    preguntaActual1.opciones1.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta1" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();
}

function closeDialog1() {
    const modal = document.getElementById("questionModal1");
    modal.close();
}

function validarRespuesta1() {
    const seleccion = document.querySelector('input[name="respuesta1"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual1.correcta) {
        puntuacion1++;
        document.getElementById("puntuacion1").textContent = puntuacion1;
    } else {
    }
    const container3 = document.getElementById('container3');
    container3.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog1();
    mostrarResultados1(respuesta);
}


function mostrarResultados1(respuesta) {
    const preguntaR = document.getElementById("preguntaR1");
    const respuestaDiv = document.getElementById("respuesta1");
    const competencia = document.getElementById("competencia1");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual1.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual1.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual1.opciones1[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual1.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual1.opciones1[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual1.competenciaM}</p>`;    
    }
}

//Exponente de Cifrado (e)
const preguntas2 = [
    {
        texto: "¿Cuál es el rol principal del exponente “e” en el algoritmo RSA?",
        opciones2: [
            "A) Calcular el módulo “n”.",
            "B) Desencriptar los datos en el sistema RSA.",
            "C) Calcular el inverso modular de &phi;(n).",
            "D) Cifrar los datos utilizando la clave pública."
        ],
        correcta: 3,
        competenciaA: "Entiende que “e” es el exponente público utilizado para cifrar los datos en RSA.",
        competenciaM: "Debe comprender el propósito del exponente “e” dentro del proceso de cifrado en RSA."
    },
    {
        texto: "¿Qué condiciones debe cumplir el exponente “e” para ser válido en el algoritmo RSA?",
        opciones2: [
            "A) e > 1 y “e” es un múltiplo de &phi;(n).",
            "B) e < &phi;(n) y “e” es igual a &phi;(n).",
            "C) 1 < e < &phi;(n) y MCD(e,&phi;(n)) = 1.",
            "D) e > &phi;(n) y MCD(e,&phi;(n)) > 1."
        ],
        correcta: 2,
        competenciaA: "Reconoce las dos condiciones fundamentales para que “e” sea válido: rango y coprimalidad con φ(n).",
        competenciaM: "Debe reforzar su comprensión sobre las restricciones matemáticas que hacen posible el uso de “e” en RSA."
    },
    {
        texto: "¿Por qué es importante que el exponente “e” sea coprimo con &phi;(n)?",
        opciones2: [
            "A) Para que e sea mayor que &phi;(n).",
            "B) Para poder calcular su inverso modular con respecto a &phi;(n).",
            "C) Para asegurar que e divida &phi;(n) sin residuo.",
            "D) Para garantizar que e sea igual a la clave privada “d”."
        ],
        correcta: 1,
        competenciaA: "Comprende que la coprimalidad entre “e” y φ(n) es esencial para calcular el inverso modular, lo que permite generar la clave privada “d”.",
        competenciaM: "Debe comprender cómo la coprimalidad permite realizar operaciones cruciales en RSA, como la generación de la clave privada."
    },
    {
        texto: "Si φ(n) = 40, ¿cuál de los siguientes valores puede ser utilizado como exponente “e”?",
        opciones2: [
            "A) 1",
            "B) 7",
            "C) 10",
            "D) 40"
        ],
        correcta: 1,
        competenciaA: "Es capaz de aplicar las condiciones de rango y coprimalidad para elegir un exponente válido.",
        competenciaM: "Debe reforzar su capacidad de identificar valores de “e” que cumplan las condiciones matemáticas necesarias."
    },
    {
        texto: "¿Qué sucede si “e” no es coprimo con &phi;(n)?",
        opciones2: [
            "A) No se podrá calcular el parámetro “d” de la clave privada.",
            "B) No se podrá cifrar la información correctamente.",
            "C) “e” será igual a la clave privada “d”.",
            "D) El módulo “n” será inválido."
        ],
        correcta: 0,
        competenciaA: "Entiende que la falta de coprimalidad impide calcular el parámetro “d” de la clave privada, lo que inutiliza el algoritmo RSA.",
        competenciaM: "Debe reforzar la relación entre la coprimalidad de “e” con φ(n) y la generación de la clave privada en el algoritmo RSA."
    }
];

let puntuacion2 = 0;
let preguntaActual2;

function showDialog2() {
    const modal = document.getElementById("questionModal2");
    preguntaActual2 = preguntas2[Math.floor(Math.random() * preguntas2.length)];
    document.getElementById("pregunta2").innerHTML = `<h3>${preguntaActual2.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones2");
    opcionesDiv.innerHTML = "";
    preguntaActual2.opciones2.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta2" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();
}

function closeDialog2() {
    const modal = document.getElementById("questionModal2");
    modal.close();
}

function validarRespuesta2() {
    const seleccion = document.querySelector('input[name="respuesta2"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual2.correcta) {
        puntuacion2++;
        document.getElementById("puntuacion2").textContent = puntuacion2;
    } else {
    }
    const container4 = document.getElementById('container4');
    container4.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog2();
    mostrarResultados2(respuesta);
}

function mostrarResultados2(respuesta) {
    const preguntaR = document.getElementById("preguntaR2");
    const respuestaDiv = document.getElementById("respuesta2");
    const competencia = document.getElementById("competencia2");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual2.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual2.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual2.opciones2[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual2.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual2.opciones2[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual2.competenciaM}</p>`;    
    }
}

//Exponente de Descifrado (d)
const preguntas3 = [
    {
        texto: "¿Qué condición debe cumplirse para que sea posible calcular el inverso multiplicativo de “e” módulo ϕ(n)?",
        opciones3: [
            "A) e debe ser mayor que ϕ(n).",
            "B) e debe ser un número primo.",
            "C) e debe ser un múltiplo de ϕ(n).",
            "D) MCD(e,ϕ(n)) = 1."
        ],
        correcta: 3,
        competenciaA: "Entiende que la coprimalidad entre e y ϕ(n) es esencial para calcular el inverso multiplicativo y, por ende, d.",
        competenciaM: "Debe reforzar el concepto de coprimalidad y su importancia en la generación de d."
    },
    {
        texto: "¿Qué representa la ecuación e × d ≡ 1 (MOD ϕ(n))?",
        opciones3: [
            "A) Que e y d son números primos entre sí.",
            "B) Que e es igual a ϕ(n).",
            "C) Que d es el inverso multiplicativo de e módulo ϕ(n).",
            "D) Que d es un múltiplo de e."
        ],
        correcta: 2,
        competenciaA: "Reconoce que esta congruencia define la relación que permite utilizar “d” para descifrar los datos cifrados con e.",
        competenciaM: "Debe comprender cómo la congruencia define el papel de “d” en el proceso de descifrado."
    },
    {
        texto: "¿Cómo se asegura que el resultado de d sea positivo después de calcular el inverso multiplicativo?",
        opciones3: [
            "A) Se agrega 1 a d.",
            "B) Se utiliza el módulo ϕ(n) para ajustar el resultado. ",
            "C) Se calcula el complemento de d.",
            "D) Se ignora el signo negativo de d."
        ],
        correcta: 1,
        competenciaA: "Entiende cómo ajustar el resultado para que d sea positivo en el sistema modular.",
        competenciaM: "Debe reforzar la comprensión de las operaciones en aritmética modular y su aplicación en RSA."
    },
    {
        texto: "Durante el proceso de retroceso en el algoritmo extendido de Euclides, ¿qué se busca obtener?",
        opciones3: [
            "A) El valor de MCD(e,ϕ(n)).",
            "B) Los coeficientes que expresan el MCD como una combinación lineal de e y ϕ(n).",
            "C) El valor del módulo n.",
            "D) Una aproximación del inverso multiplicativo."
        ],
        correcta: 1,
        competenciaA: "Comprende cómo el algoritmo extendido de Euclides encuentra los coeficientes necesarios para expresar el MCD como combinación lineal.",
        competenciaM: "Debe entender cómo el retroceso en el algoritmo ayuda a determinar el inverso multiplicativo."
    },
    {
        texto: "En el ejemplo proporcionado (e = 7 y ϕ(n)=40), ¿cuál es el valor final del exponente de descifrado d?",
        opciones3: [
            "A) 23",
            "B) 40",
            "C) 7",
            "D) 17"
        ],
        correcta: 0,
        competenciaA: "Es capaz de aplicar el algoritmo de Euclides y sus pasos para calcular “d” correctamente.",
        competenciaM: "Debe practicar los cálculos del inverso multiplicativo y verificar los resultados en aritmética modular."
    }
];

let puntuacion3 = 0;
let preguntaActual3;

function showDialog3() {
    const modal = document.getElementById("questionModal3");
    preguntaActual3 = preguntas3[Math.floor(Math.random() * preguntas3.length)];
    document.getElementById("pregunta3").innerHTML = `<h3>${preguntaActual3.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones3");
    opcionesDiv.innerHTML = "";
    preguntaActual3.opciones3.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta3" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();
}

function closeDialog3() {
    const modal = document.getElementById("questionModal3");
    modal.close();
}

function validarRespuesta3() {
    const seleccion = document.querySelector('input[name="respuesta3"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual3.correcta) {
        puntuacion3++;
        document.getElementById("puntuacion3").textContent = puntuacion3;
    } else {
    }
    const container5 = document.getElementById('container5');
    container5.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog3();
    mostrarResultados3(respuesta);
}

function mostrarResultados3(respuesta) {
    const preguntaR = document.getElementById("preguntaR3");
    const respuestaDiv = document.getElementById("respuesta3");
    const competencia = document.getElementById("competencia3");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual3.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual3.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual3.opciones3[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual3.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual3.opciones3[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual3.competenciaM}</p>`;    
    }
}

//Cifrado
const preguntas4 = [
    {
        texto: "¿Qué operación matemática se realiza para cifrar un mensaje en RSA?",
        opciones4: [
            "A) Multiplicar el mensaje M por e y dividir entre n.",
            "B) Sumar M, e y n.",
            "C) Elevar e al cuadrado y multiplicarlo por M.",
            "D) Elevar el mensaje M a la potencia e y calcular el residuo módulo n."
        ],
        correcta: 3,
        competenciaA: "Entiende la operación central de cifrado en RSA y cómo se aplica a los datos.",
        competenciaM: "Debe reforzar la comprensión de la fórmula C = M**e (MOD n) como base del cifrado en RSA."
    },
    {
        texto: "¿Qué representa el exponente e en el cifrado RSA?",
        opciones4: [
            "A) La clave privada.",
            "B) El módulo público.",
            "C) El exponente público, utilizado para cifrar el mensaje.",
            "D) El inverso multiplicativo de d."
        ],
        correcta: 2,
        competenciaA: "Reconoce el rol de “e” como parte de la clave pública y su función en el proceso de cifrado.",
        competenciaM: "Debe reforzar la identificación de los elementos de la clave pública y su propósito en RSA."
    },
    {
        texto: "¿Cómo se calcula el valor del mensaje cifrado C?",
        opciones4: [
            "A) C = M + e (MOD n).",
            "B) C = M**e (MOD n).",
            "C) C = M × e (MOD n)",
            "D) C = e**M (MOD n)."
        ],
        correcta: 1,
        competenciaA: "Es capaz de aplicar correctamente la fórmula de cifrado y entender su estructura matemática.",
        competenciaM: "Debe practicar la fórmula para comprender cómo transformar M en C."
    },
    {
        texto: "Si el mensaje original es “HOLA”, ¿cuál sería la representación numérica correspondiente según la codificación dada?",
        opciones4: [
            "A) [7, 15, 11, 0]",
            "B) [8, 16, 12, 1]",
            "C) [8, 15, 11, 1]",
            "D) [7, 16, 12, 0]"
        ],
        correcta: 1,
        competenciaA: "Sabe transformar un mensaje alfabético en una secuencia numérica según la codificación especificada.",
        competenciaM: "Debe reforzar la asociación entre caracteres alfabéticos y sus valores numéricos para preparar el mensaje M."
    },
    {
        texto: "¿Cuál es la función del módulo n en la fórmula de cifrado RSA?",
        opciones4: [
            "A) Limitar el valor de C dentro de un rango definido por n.",
            "B) Garantizar que el resultado sea un número positivo.",
            "C) Sumar el mensaje original con el exponente e.",
            "D) Multiplicar el exponente público por el mensaje original."
        ],
        correcta: 0,
        competenciaA: "Comprende la importancia del módulo en las operaciones de cifrado para mantener los valores dentro de un rango.",
        competenciaM: "Debe reforzar el concepto de aritmética modular y su rol en la fórmula C=M**e (MOD n)."
    }
];

let puntuacion4 = 0;
let preguntaActual4;

function showDialog4() {
    const modal = document.getElementById("questionModal4");
    preguntaActual4 = preguntas4[Math.floor(Math.random() * preguntas4.length)];
    document.getElementById("pregunta4").innerHTML = `<h3>${preguntaActual4.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones4");
    opcionesDiv.innerHTML = "";
    preguntaActual4.opciones4.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta4" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();
}

function closeDialog4() {
    const modal = document.getElementById("questionModal4");
    modal.close();
}

function validarRespuesta4() {
    const seleccion = document.querySelector('input[name="respuesta4"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual4.correcta) {
        puntuacion4++;
        document.getElementById("puntuacion4").textContent = puntuacion4;
    } else {
    }
    const container7 = document.getElementById('container7');
    container7.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog4();
    mostrarResultados4(respuesta);
}

function mostrarResultados4(respuesta) {
    const preguntaR = document.getElementById("preguntaR4");
    const respuestaDiv = document.getElementById("respuesta4");
    const competencia = document.getElementById("competencia4");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual4.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual4.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual4.opciones4[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual4.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual4.opciones4[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual4.competenciaM}</p>`;    
    }
}

//Descifrado
const preguntas5 = [
    {
        texto: "¿Qué operación matemática es fundamental para recuperar el mensaje original en el descifrado RSA?",
        opciones5: [
            "A) Sumar el exponente privado y el módulo.",
            "B) Restar el módulo n al exponente privado.",
            "C) Dividir el mensaje cifrado entre el módulo n.",
            "D) Elevar el mensaje cifrado al exponente privado y calcular módulo n."
        ],
        correcta: 3,
        competenciaA: "Comprende que el descifrado en RSA implica elevar el mensaje cifrado C al exponente privado d y calcular el módulo n.",
        competenciaM: "Debe reforzar la noción de cómo se utiliza la clave privada en el proceso de descifrado."
    },
    {
        texto: "¿Qué papel desempeña el exponente privado d en el descifrado RSA?",
        opciones5: [
            "A) Es el inverso del mensaje cifrado.",
            "B) Multiplica directamente el mensaje cifrado para recuperar el original.",
            "C) Garantiza que solo el destinatario pueda descifrar el mensaje.",
            "D) No tiene un rol importante en el descifrado."
        ],
        correcta: 2,
        competenciaA: "Reconoce la función del exponente privado d como el componente clave que permite el descifrado seguro.",
        competenciaM: "Debe profundizar en el rol específico de d y su cálculo en el proceso RSA."
    },
    {
        texto: "¿Qué garantiza que el mensaje descifrado M coincida con el mensaje original?",
        opciones5: [
            "A) Que el módulo n sea igual al exponente público e.",
            "B) La congruencia matemática en RSA entre el cifrado y descifrado.",
            "C) Que el mensaje cifrado sea mayor que n.",
            "D) La igualdad del exponente privado y público."
        ],
        correcta: 1,
        competenciaA: "Comprende la congruencia matemática que relaciona M, C, d, y n en RSA.",
        competenciaM: "Necesita reforzar la comprensión de cómo RSA asegura la integridad del mensaje durante el cifrado y descifrado."
    },
    {
        texto: "¿Qué operación modular se utiliza al descifrar un mensaje cifrado “C” con la clave privada?",
        opciones5: [
            "A) M = C + d (MOD n)",
            "B) M = C**d (MOD n)",
            "C) M = C**e (MOD n)",
            "D) M = C / d (MOD n)"
        ],
        correcta: 1,
        competenciaA: "Reconoce que el descifrado en RSA implica la operación C**d MOD n.",
        competenciaM: "Reforzar cómo se aplica la operación modular en el descifrado RSA."
    },
    {
        texto: "¿Por qué se requiere una clave privada distinta para descifrar un mensaje cifrado en RSA?",
        opciones5: [
            "A) Para proteger la confidencialidad y evitar que cualquiera descifre el mensaje.",
            "B) Porque la clave pública no contiene suficiente información para descifrar.",
            "C) Porque el cifrado y descifrado son procesos idénticos.",
            "D) Porque las claves privada y pública se generan de manera independiente."
        ],
        correcta: 0,
        competenciaA: "Comprende la importancia de la separación entre clave pública y clave privada para la seguridad en RSA.",
        competenciaM: "Debe reforzar el entendimiento del rol de la clave privada en garantizar la confidencialidad del sistema RSA."
    }
];

let puntuacion5 = 0;
let preguntaActual5;

function showDialog5() {
    const modal = document.getElementById("questionModal5");
    preguntaActual5 = preguntas5[Math.floor(Math.random() * preguntas5.length)];
    document.getElementById("pregunta5").innerHTML = `<h3>${preguntaActual5.texto}</h3>`;
    const opcionesDiv = document.getElementById("opciones5");
    opcionesDiv.innerHTML = "";
    preguntaActual5.opciones5.forEach((opcion, index) => {
        opcionesDiv.innerHTML += `
            <div>
                <input type="radio" name="respuesta5" id="opcion${index}" value="${index}">
                <label for="opcion${index}">${opcion}</label>
            </div>
        `;
    });
    modal.showModal();
}

function closeDialog5() {
    const modal = document.getElementById("questionModal5");
    modal.close();
}

function validarRespuesta5() {
    const seleccion = document.querySelector('input[name="respuesta5"]:checked');
    if (!seleccion) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    const respuesta = parseInt(seleccion.value);
    if (respuesta === preguntaActual5.correcta) {
        puntuacion5++;
        document.getElementById("puntuacion5").textContent = puntuacion5;
    } else {
    }
    const container8 = document.getElementById('container8');
    container8.style.display = 'block'; // Cambia display a "block" para mostrarlo
    closeDialog5();
    mostrarResultados5(respuesta);
}

function mostrarResultados5(respuesta) {
    const preguntaR = document.getElementById("preguntaR5");
    const respuestaDiv = document.getElementById("respuesta5");
    const competencia = document.getElementById("competencia5");

    // Mostrar la pregunta en el nuevo div
    preguntaR.innerHTML = `<h3>Pregunta:${preguntaActual5.texto}</h3>`;

    // Mostrar el resultado
    if (respuesta === preguntaActual5.correcta) {
        respuestaDiv.innerHTML = `<p class="correcto">Respuesta correcta: ${preguntaActual5.opciones5[respuesta]}</p>`;
        competencia.innerHTML = `<p>Competencia adquirida al acertar: ${preguntaActual5.competenciaA}</p>`;
    } else {
        respuestaDiv.innerHTML = `<p class="incorrecto">Respuesta incorrecta: ${preguntaActual5.opciones5[respuesta]}<br>`;
        competencia.innerHTML = `<p>Competencia por mejorar si falla: ${preguntaActual5.competenciaM}</p>`;    
    }
}