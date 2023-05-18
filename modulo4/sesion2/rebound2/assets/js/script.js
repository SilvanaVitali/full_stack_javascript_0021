class RegistroR {
    constructor(correo, contrasenha) {
        this.usuario = `Usuraio${Math.trunc(Math.random() * 1234)}`
        this.correo = correo;
        this.contrasenha = contrasenha;
    }

    infoModal() {
        document.getElementById("tituloModal").innerHTML = `Bienvenido ${this.usuario}`;
        document.getElementById("contenidoModal").innerHTML = `Email: ${this.correo} Contraseña: ${this.contrasenha}`;
        myModal.show();
    }
}

class RegistroVip extends RegistroR {
    constructor(nombre, correo, contrasenha) {
        super(correo, contrasenha)
        this.nombre = nombre;
    }

    infoModal() {
        document.getElementById("tituloModal").innerHTML = `Bienvenido ${this.nombre}`;
        document.getElementById("contenidoModal").innerHTML = `Usuario: ${this.nombre} Email: ${this.correo} Contraseña: ${this.contrasenha}`;
        myModal.show();
    }
}

let singTab = document.getElementById("signUpTab");
let vipTab = document.getElementById("vipTab");
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

singTab.addEventListener('click', function () {
    this.setAttribute('class', 'nav-link fw-semibold text-white border-bottom border-primary border-3 px-0 me-2 active');
    vipTab.setAttribute('class', 'nav-link fw-semibold text-dark px-0');
})

vipTab.addEventListener('click', function () {
    this.setAttribute('class', 'nav-link fw-semibold text-white border-bottom border-warning border-3 px-0 active');
    singTab.setAttribute('class', 'nav-link fw-semibold text-dark me-2 px-0');
})

let formulario = document.querySelectorAll(".form");
for (let item of formulario) {
    item.addEventListener('submit', function (e) {
        e.preventDefault();
        if (item.id === "formR") {
            let usuarioR = new RegistroR(document.getElementById("correoR").value, document.getElementById("contrasenhaR").value);
            usuarioR.infoModal();
        } else if (item.id === "formV") {
            let usuarioV = new RegistroVip(document.getElementById("nombreV").value, document.getElementById("correoV").value, document.getElementById("contrasenhaV").value);
            usuarioV.infoModal();
        }
    })
}