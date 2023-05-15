const valorCuota = (deuda, interesTotal, cuota) => Math.round((deuda + interesTotal) / cuota);
const valorInteres = (deuda, interes) => Math.round(deuda * (interes / 100));
const formatoNumero = (texto) => texto.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let boton = document.querySelector("button");

boton.addEventListener('click', function () {
    let deuda = parseInt(document.getElementById("deuda").value);
    let interes = parseInt(document.getElementById("interes").value);
    let nCuota = parseInt(document.getElementById("nCuota").value);
    let mensaje = document.getElementById("mensaje");

    let interesTotal = valorInteres(deuda, interes);
    let cuotaFinal = String(valorCuota(deuda, interesTotal, nCuota));
    (deuda > 0 && interes > 0 && nCuota > 0) ? mensaje.innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${nCuota} CUOTAS DE $${formatoNumero(cuotaFinal)}`
        : alert("Debe completar todos los campos solicitados")
})