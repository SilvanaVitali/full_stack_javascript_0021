var obtener = document.getElementById("obtener");
var codigo = document.getElementById("codigo");
var check = document.getElementById("flexCheckDefault");

obtener.addEventListener("click", function () {
    if (check.checked) {
        codigo.innerHTML = "MNO123ST";
    } else {
        alert("Para obtener un código de descuento debe aceptar los términos y condiciones")
    }
});