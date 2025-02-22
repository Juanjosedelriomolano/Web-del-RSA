// Asegurarse de que el contenido se muestre desde el inicio
function showTotiente() {
    window.totiente.showModal();
    window.totiente.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function show_AE_span() {
    window.algoritmo_extendido_span.showModal();
    window.algoritmo_extendido_span.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function show_AE() {
    window.algoritmo_extendido.showModal();
    window.algoritmo_extendido.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function show_MC() {
    window.modal_cifrado.showModal();
    window.modal_cifrado.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function showEC() {
    window.exponente_cifrado.showModal();
    window.exponente_cifrado.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function showTC() {
    window.texto_cifrado.showModal();
    window.texto_cifrado.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function show_results() {
    window.final.showModal();
    window.final.scrollTop = 0; // Forzar que el contenido comience desde el inicio
}

function sumarPuntuaciones() {
    const puntuacionFinal = document.getElementById("puntuacionFinal");
    let suma = 0;

    // Iterar desde el ID "puntuacion" hasta "puntuacion5"
    for (let i = 0; i <= 5; i++) {
        const spanId = i === 0 ? "puntuacion" : `puntuacion${i}`;//Compara si el ID tiene un número, si lo tiene, la variable guardara un ID con número como puntuacion1, si es 0, simplemente se guardara en la variable el ID puntuacion
        const span = document.getElementById(spanId);//Guarda los ID de los span

        // Verificar que el span exista y su valor sea 1
        if (span && parseInt(span.textContent) === 1) {
            suma += 1;
        }
    }

    //puntuacionFinal.innerHTML = ((suma/6)*100);
    puntuacionFinal.innerHTML = (suma/6).toFixed(1);
}

function recargarPagina() {
    location.reload(); // Recarga la página actual
    window.scrollTo(0,0);
}

document.getElementById("botonResultados").addEventListener("click", () => sumarPuntuaciones());

//Código para cambiar las flechas del módulo d
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los botones en orden
    const buttons = [
        document.getElementById("arrow_buttom1"),
        document.getElementById("arrow_buttom2"),
        document.getElementById("arrow_buttom3"),
        document.getElementById("arrow_buttom4")
    ];

    const shapeButton = document.getElementById("shape_button4");
    const adminSpan = document.getElementById("admin"); // Obtener el elemento <span id="admin">
    const isAdmin = adminSpan.textContent.trim() === "1"; // Convertir a número y evaluar

    // Función para cambiar el color de la flecha
    function changeArrowColor(button) {
        const arrow = button.querySelector(".arrow.red");
        if (arrow) {
            arrow.style.borderTopColor = "green";
        }
    }

    // Si admin es 1, solo desbloqueamos arrow_buttom1
    if (isAdmin) {
        buttons.forEach((button, index) => {
            button.disabled = index !== 0; // Solo arrow_buttom1 estará activo
        });
    }

    // Evento para desbloquear el primer botón al hacer clic en shape_button4 (si no es admin)
    shapeButton.addEventListener("click", function () {
        if (!isAdmin && buttons[0]) {
            buttons[0].disabled = false;
            changeArrowColor(buttons[0]);
        }
    });

    // Evento para desbloquear los botones en secuencia (si no es admin)
    if (!isAdmin) {
        buttons.forEach((button, index) => {
            button.addEventListener("click", function () {
                if (index < buttons.length - 1) {
                    buttons[index + 1].disabled = false;
                    changeArrowColor(buttons[index + 1]);
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = [
        document.getElementById("shape_button"),
        document.getElementById("shape_button1"),
        document.getElementById("shape_button2"),
        document.getElementById("shape_button3"),
        document.getElementById("shape_button4"),
        document.getElementById("shape_button5"),
        document.getElementById("shape_button6")
    ].filter(Boolean); // Filtra valores nulos si algún botón no existe

    function changeShapeButton(button) {
        if (button) {
            button.style.color = "green"; // Cambia el color del texto
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            changeShapeButton(button); // Cambia el color del botón presionado
        });
    });
});
