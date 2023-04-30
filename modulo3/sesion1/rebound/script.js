alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.")

function formatDosD(num){
    if(num<10){
        num = `0${num}`
    } else {
        num = num
    }
    return num
}

let fecha = new Date();
let formatoFecha = `${formatDosD(fecha.getDate())}-${formatDosD(fecha.getMonth()+1)}-${fecha.getFullYear()}`;
document.getElementById("insertDate").innerHTML = formatoFecha;

let formatoHora = `${formatDosD(fecha.getHours())}:${formatDosD(fecha.getMinutes())}`;
document.getElementById("insertTime").innerHTML = formatoHora;

let numeroVuelo = Math.ceil(Math.random()*100000)
document.getElementById("flightNumber").innerHTML = numeroVuelo;

let numeroTerminal = Math.floor(Math.random()*13)
document.getElementById("terminalNumber").innerHTML = numeroTerminal;
