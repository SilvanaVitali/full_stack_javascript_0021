let lista = [];

let btnAgregar = document.getElementById("btnAgregar");
let btnBorrar = document.getElementById("btnBorrar");
let listaEquipo = document.getElementById("listaEquipo");

btnAgregar.addEventListener('click', function() {
    let inputAgregar = document.getElementById("inputAgregar");
    lista.push(inputAgregar.value);
    listaEquipo.innerHTML = lista
})

btnBorrar.addEventListener('click', function() {
    let inputBorrar = document.getElementById("inputBorrar");
    lista = lista.filter(nombre => nombre !== inputBorrar.value);
    listaEquipo. innerHTML = lista;
})