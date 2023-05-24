let inputContador = document.getElementById("contador");
const timer = document.getElementById("timer");
const btnEmezar = document.getElementById("btnEmpezar");
var temporizador;

function actualizarTimer() {
    timer.innerHTML = contador < 10 ? `0${String(contador)}` : contador;
    contador--;
    if (contador < 0) {
        clearInterval(temporizador)
        btnEmezar.disabled = false;
    }
}

btnEmezar.addEventListener("click", function () {
    contador = inputContador.value;
    console.log(contador);
    if (contador !== "") {
        contador = parseInt(contador);
        temporizador = setInterval(actualizarTimer, 1000);
        btnEmezar.disabled = true;
    } else {
        alert("Debe ingresar un número")
    }
})

document.getElementById("btnCancelar").addEventListener("click", function () {
    timer.innerHTML = "00"
    clearInterval(temporizador);
    btnEmezar.disabled = false;
})