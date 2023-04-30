function formC() {
    document.getElementById('comuniquemonos').classList.remove("d-none");
    document.getElementById('reserva').classList.add("d-none");
}

function formR() {
    document.getElementById('reserva').classList.remove("d-none");
    document.getElementById('comuniquemonos').classList.add("d-none");
}

const formCom = document.getElementById('formCom');
formCom.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombreC").value;
    const correo = document.getElementById("correoC").value;
    const telefono = document.getElementById("telefonoC").value;
    const motivo = document.getElementById("motivoC").value;
    const tamotivo = document.getElementById("ta_motivoC").value;

    if (nombre == "") {
        alert("El campo 'Nombre' es obligatorio")
    } else if (correo == "") {
        alert("El campo 'Correo' es obligatorio")
    } else if (telefono == "") {
        alert("El campo 'Teléfono' es obligatorio")
    } else if (motivo == "") {
        alert("El campo 'Motivo' es obligatorio")
    } else if (tamotivo == "") {
        alert("El campo 'Detalle motivo' es obligatorio")
    } else {
        alert(`Muchas gracias ${nombre} hemos recibido su sugerencia y enviaremos una pronta 
        respuesta al correo ${correo}`)
    }
})


$(document).ready(function () {
    $("#formRes").submit(function (event) {
        event.preventDefault();
        let nombre = $("#nombreR").val();
        console.log(nombre);
        let correo = $("#correoR").val();
        let telefono = $("#telefonoR").val();
        let fecha = $("#fechaR").val();
        let hora = $("#horaR").val();
        let asistentes = $("#asistentesR").val();
        alert(`Estimado: ${nombre} agradecemos por reservar con nosotros. Hemos registrado ${asistentes} asistentes. Se ha enviado el código de confirmación al correo ${correo} \n Gracias por preferirnos`);
    })

    const open_card1 = $("#card1");
    open_card1.click(function () {
        $("#modal").css("display", "block");
        $("#modal-title").text($("#card1-T").text())
        $("#modal-p").text($("#card1-P").text())
        $("#modal-i").attr("src", $("#card1-I").attr("src"))
    })

    const close_card = $("#btn_close");
    close_card.click(function(){
        $("#modal").css("display", "none");
    })

    const open_card2 = $("#card2");
    open_card2.click(function () {
        $("#modal").css("display", "block");
        $("#modal-title").text($("#card2-T").text())
        $("#modal-p").text($("#card2-P").text())
        $("#modal-i").attr("src", $("#card2-I").attr("src"))
    })

    const open_card3 = $("#card3");
    open_card3.click(function () {
        $("#modal").css("display", "block");
        $("#modal-title").text($("#card3-T").text())
        $("#modal-p").text($("#card3-P").text())
        $("#modal-i").attr("src", $("#card3-I").attr("src"))
    })

})