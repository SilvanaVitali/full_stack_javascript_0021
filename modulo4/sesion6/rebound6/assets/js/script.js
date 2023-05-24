function horaSantiago() {
    let hora = new Date();
    document.getElementById("santiago").innerHTML = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`;
}

function horaLugares(element, dif){
    setInterval(mostrarHora, 1000,element, dif);
}

function mostrarHora(element, dif) {
    let hora = new Date();
    element.innerHTML = `${hora.getHours() + dif}:${hora.getMinutes()}:${hora.getSeconds()}`;
}

setInterval(horaSantiago, 1000);
setInterval(horaLugares, 4000,document.getElementById("paris"), 4);
setInterval(horaLugares, 8000,document.getElementById("londres"), 3);
setInterval(horaLugares, 12000,document.getElementById("nuevaYork"), -2);
setInterval(horaLugares, 16000,document.getElementById("sanPetersburgo"), 6);
setInterval(horaLugares, 20000,document.getElementById("beijing"), -13);
setInterval(horaLugares, 24000,document.getElementById("seul"), -12);