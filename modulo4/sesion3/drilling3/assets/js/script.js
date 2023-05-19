function imprimir(...correos) {
    for (correo of correos) {
        if (correo != "") {
            console.log(`CC: ${correo}`);
        }
    }
}

document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(`
PARA: ${document.getElementById("para").value}
TITULO: ${document.getElementById("titulo").value}
MENSAJE: ${document.getElementById("mensaje").value}
FROM: ${document.getElementById("de").value}`);
    imprimir(document.getElementById("cc1").value, document.getElementById("cc2").value, document.getElementById("cc3").value, document.getElementById("cc4").value, document.getElementById("cc5").value, document.getElementById("cc6").value)
})