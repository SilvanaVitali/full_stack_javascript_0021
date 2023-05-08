function Usuario(nombre,correo,trabajo,telefono,info){
    this.nombre = nombre;
    this.correo = correo;
    this.trabajo = trabajo;
    this.telefono = telefono;
    this.info = info;
}

function mostrarPerfil(usuario){
    document.getElementById("nombreP").innerHTML = usuario.nombre;
    document.getElementById("trabajoP").innerHTML = usuario.trabajo;
    document.getElementById("correoP").innerHTML = usuario.correo;
    document.getElementById("telefonoP").innerHTML = usuario.telefono;
    document.getElementById("infoP").innerHTML = usuario.info;
}

let inputNombre = document.getElementById("inputNombre");
let inputEmail = document.getElementById("inputEmail");
let inputTrabajo = document.getElementById("inputTrabajo");
let inputTelefono = document.getElementById("inputTelefono");
let inputSobreTi = document.getElementById("inputSobreTi");
let enviar = document.getElementById("enviar");

enviar.addEventListener('click', function() {
    event.preventDefault();
    let usuario = new Usuario(inputNombre.value,inputEmail.value,inputTrabajo.value,inputTelefono.value,inputSobreTi.value)
    mostrarPerfil(usuario);
})
