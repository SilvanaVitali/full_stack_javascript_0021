function mensajeEnviado(enviado) {
    return new Promise(function (resolve, reject) {
        if (enviado) {
            resolve('<div class="alert alert-success" role="alert">Mensaje enviado!</div>')
        } else {
            reject('<div class="alert alert-danger" role="alert">Ya has enviado un mensaje. No puedes enviar otro.</div>')
        }
    })
}

let enviado = true;
document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();
    let promesa = mensajeEnviado(enviado)
    promesa.then(alerta => {
        enviado = false;
        document.getElementById("alerta").innerHTML = alerta
    }, alerta => document.getElementById("alerta").innerHTML = alerta)
})