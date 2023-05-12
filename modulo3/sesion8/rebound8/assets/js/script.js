let btn = document.querySelector(".btn");

function validarEdad(edad) {
  var validador = {
    get(target, key) {
      return target[key] > 18 ? true : false
    }
  }
  var r = new Proxy(Reserva, validador);
    r.edad = parseInt(edad);
    return r.edad
}

function Reserva(nombre, apellido, email, edad, fecha) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.edad = edad;
  this.fecha = fecha;
}

btn.addEventListener('click', function (e) {
  e.preventDefault();
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let email = document.getElementById("email");
  let edad = document.getElementById("edad");
  let fecha = document.getElementById("fecha");

  if (validarEdad(edad.value)) {
    let reserva = new Reserva(nombre.value, apellido.value, email.value, edad.value, fecha.value);
    console.log(reserva);
  } else {
    alert("Debes ser mayor de edad para crear una reservación");
  }
});