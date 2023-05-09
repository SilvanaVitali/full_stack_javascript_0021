let laptop1 = new Laptop("Dell", "Xtreme 270", "$3.990", "./assets/img/1.jpg");
let laptop2 = new Laptop("Apple", "MacBook Air", "$999", "./assets/img/2.jpg");
let ver = document.getElementById("ver");

function Laptop(marca, modelo, precio, imagen) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
}

function tarjeta(laptop) {
    document.getElementById("contenido").innerHTML = `
    <div class="card w-50">
        <img id="imagen" src="${laptop.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 id="note" class="card-title">${laptop.marca} ${laptop.modelo}</h5>
            <p class="card-text"><small class="text-body-secondary">Laptops</small></p>
        </div>
        <ul class="list-group list-group-flush">
            <li id="precio" class="list-group-item">${laptop.precio}</li>
        </ul>
        <div class="card-body">
            <a href="#" class="btn btn-primary rounded-1">Comprar ahora</a>
            <a id="alternativa" href="#" class="text-decoration-none">Ver alternativa</a>
        </div>
    </div>
    `;

    let alternativa = document.getElementById("alternativa");

    alternativa.addEventListener('click', function () {
        console.log(document.getElementById("note").innerHTML.includes("Dell"));
        document.getElementById("note").innerHTML.includes("Dell") ? tarjeta(laptop2) : tarjeta(laptop1)
    })
}

ver.addEventListener('click', function () { tarjeta(laptop1) });

