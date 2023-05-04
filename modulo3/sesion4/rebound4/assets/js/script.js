let opcionO = document.getElementById("opcionO");
let origen = document.getElementById("origen");
let opcionD = document.getElementById("opcionD");
let destino = document.getElementById("destino");
let escala = document.getElementById("escala");
let fOrigen = document.getElementById("fOrigen");
let fechaO = document.getElementById("fechaO");
let fDestino = document.getElementById("fDestino");
let fechaD = document.getElementById("fechaD");
let validarFecha = document.getElementById("validarFecha")

opcionO.addEventListener("change", (event) => {
    origen.innerHTML = event.target.value;
    verEscala(opcionO.value, opcionD.value);
})

opcionD.addEventListener("change", (event) => {
    destino.innerHTML = event.target.value
    verEscala(opcionO.value, opcionD.value);
})

fOrigen.addEventListener("change", (event) => {
    validarFecha.innerHTML = "";
    fDestino.value === ""? fechaO.innerHTML = event.target.value : fOrigen.value < fDestino.value ?  fechaO.innerHTML = event.target.value : fechaInvalida(fechaO)
});

fDestino.addEventListener("change", (event) => {
    validarFecha.innerHTML = "";
    fOrigen.value === ""? fechaD.innerHTML = event.target.value : fOrigen.value < fDestino.value ? fechaD.innerHTML = event.target.value : fechaInvalida(fechaD)
});

function verEscala(o, d) {
    if ((o === "Chicago" && d === "Venice") || (o === "Venice" && d === "Chicago") || (o === "Boston" && d === "Paris") || (o === "Paris" && d === "Boston")) {
        escala.innerHTML = "¡Ojo! Tu vuelo tiene una escala."
    } else if (o === d) {
        alert("Debes elegir lugares distintos!")
    } else {
        escala.innerHTML = "¡Tu vuelo no tiene una escala!"
    }
}

function fechaInvalida(fecha) {
    validarFecha.innerHTML = "No podemos viajar en el tiempo, selecciona otras fechas";
    fecha.innerHTML = "";
}