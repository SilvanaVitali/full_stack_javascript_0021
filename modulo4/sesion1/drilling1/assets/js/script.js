let formulario = document.getElementById("formulario");

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let motivo = document.getElementById("motivo").value;
    let mensaje = document.getElementById("mensaje").value;

    alert(`DE: ${nombre} ${apellido} (${email})
    ASUNTO: ${motivo}
    MENSAJE:
    ${mensaje}`);
})