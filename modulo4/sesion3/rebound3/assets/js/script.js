let listaIngredientes = [];
let extras = [];
let checkbox = document.querySelectorAll(".form-check-input");

function formatoNumero(texto) {
    return texto.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

checkbox.forEach((item) => {
    item.addEventListener('change', function () {
        if (this.checked) {
            listaIngredientes.push(this.value);
        } else {
            listaIngredientes = listaIngredientes.filter(i => i !== this.value);
        }
        extras = listaIngredientes.slice(3)
        document.getElementById("totalIngredientes").innerHTML = listaIngredientes;
        document.getElementById("extras").innerHTML = extras;
        document.getElementById("montoExtra").innerHTML = `$${formatoNumero(String(extras.length * 800))}`;
    })
})

let inputPropina = document.getElementById("inputPropina");
let montoPropina = document.getElementById("propina");
inputPropina.addEventListener('click', function () {
    if (montoPropina.innerHTML === "") {
        montoPropina.innerHTML = "$1.000";
    }
    inputPropina.addEventListener('change', function () {
        let propina = inputPropina.value;
        montoPropina.innerHTML = `$${formatoNumero(String(propina))}`
    })
})

document.getElementById("btn").addEventListener('click', function () {
    montoPropina.innerHTML === "" ? alert("Aun no ha definido una propina")
        : alert(`Su propina de $${formatoNumero(String(montoPropina.innerHTML))} ha sido enviada`);
})

