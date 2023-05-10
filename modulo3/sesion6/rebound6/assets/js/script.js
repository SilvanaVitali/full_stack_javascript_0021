let cuenta = [];

function Item(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
}

function formatoNumero(precio) {
    let numero = precio.replaceAll('$', "").replaceAll('.', "");
    return numero
}

function formatoPrecio(num) {
        return num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function actualizarTabla(cuenta) {
    let bodyTabla = document.getElementById("bodyTabla");
    let html = "";
    cuenta.forEach(cuenta => {
            html += `
        <tr>
            <td class="text-start py-0">${cuenta.nombre}</td>
            <td class="text-end p-0">$${formatoPrecio(cuenta.precio)}</td>
        </tr>`
    })
    bodyTabla.innerHTML = html

    let totalTabla = document.getElementById("totalTabla");
    let totalCuenta = cuenta.reduce((acumulador, valorActual) => acumulador + parseInt(valorActual.precio),0);
    totalCuenta = formatoPrecio(String(totalCuenta))
    totalTabla.innerHTML = `$${totalCuenta}`
}


let checkbok = document.querySelectorAll(".form-check-input");

checkbok.forEach(function (checkbok) {
    checkbok.addEventListener('change', function () {
        let id = checkbok.value;
        if (this.checked) {
            let nombre = document.getElementById(`n${id}`).innerHTML;
            let precio = document.getElementById(`p${id}`).innerHTML;
            precio = formatoNumero(precio);
            let item = new Item(id, nombre, precio);
            cuenta.push(item);
            actualizarTabla(cuenta);
        } else {
            cuenta = cuenta.filter(cuenta => cuenta.id !== id)
            actualizarTabla(cuenta);
        }
    })
})






