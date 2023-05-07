let checkBox = document.getElementById("checkBox");
let inputEmail = document.getElementById("inputEmail");
let btnOK = document.getElementById("btnOK");

btnOK.addEventListener('click', function () {
    if (checkBox.checked && inputEmail.value !== "") {
        (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) 
        ? alert("¡Felicitaciones! Pronto escucharás de nosotros") 
        : alert("Debes ingresar un email válido")
    }
    else {
        alert("Parece que nos faltó algo...")
    }
})
