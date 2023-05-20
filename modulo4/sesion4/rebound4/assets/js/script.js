let lista = [];

class Contacto {
    constructor(nombre, apellido, telefono, correo, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.nota = nota;
    }
}

document.querySelector("form").addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = [document.getElementById("nombre").value, document.getElementById("apellido").value, document.getElementById("telefono").value, document.getElementById("correo").value, document.getElementById("nota").value]
    const contacto = new Contacto(...inputs);
    lista.push(contacto);
    const {nombreCompleto = `${contacto.nombre} ${contacto.apellido}`, telefono, correo} = contacto;
    const myModal = new bootstrap.Modal(document.getElementById('myModal'),)
    document.getElementById("modalBody").innerHTML = `Nombre: ${nombreCompleto} Email: ${correo} ${telefono}`
    myModal.show();
})
