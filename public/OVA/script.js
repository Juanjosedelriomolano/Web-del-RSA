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