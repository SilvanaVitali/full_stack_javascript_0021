var formulario = document.getElementById("formulario");
var informacion = document.createElement("div")
informacion.style.padding = "8%";
informacion.style.backgroundColor = "Gainsboro";
formulario.before(informacion);

var fecha = new Date();

function formatFech(a) {
    if (a < 10) {
        a = `0${a}`
    } else {
        a
    } return a
}
var fechaFormato = `${formatFech(fecha.getDate())}/${formatFech(fecha.getMonth() + 1)}/${fecha.getFullYear()}`;

informacion.innerHTML = `<h2>¡Apresúrese!</h2>
        <h4>El plazo máximo para inscribirse es sólo 2 días después de la siguiente fecha:</h4>
        <h2>${fechaFormato}</h2>`
