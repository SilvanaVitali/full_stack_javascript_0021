const btn = document.querySelectorAll(".btn")

for (let item of btn){
    item.addEventListener('click',function(){
        getValue(`btn${item.value}`)
        switch (item.value) {
            case 'A':
                clearScreen();
                break;
            case 'I':
                solve();
                break;
            default:
                break;
        }
    })
}

// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    var key = document.getElementById(buttonValue).innerHTML;
    var screen = document.getElementById("pantalla").innerHTML;
    if(buttonValue != "btnI") {
        document.getElementById('pantalla').innerHTML = screen + key;  
    }
}

//Borra o limpia toda la pantalla.
function clearScreen() {
    var screen = document.getElementById("pantalla").innerHTML = "";
}

//Resuelve las operaciones aritméticas
function solve() {
    var screen = document.getElementById("pantalla").innerHTML;
    var screen = document.getElementById("pantalla").innerHTML = eval(screen);
}