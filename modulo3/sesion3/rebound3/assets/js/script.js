let actividades = document.getElementById("actividades");
console.log(actividades.value);
actividades.addEventListener("change", function () {
    let actividad = actividades.value;
    let img = document.querySelector("img");
    let act = document.getElementById("act");
    let info = document.getElementById("info");
    let texto = document.getElementById("texto");

    switch (actividad) {
        case "Trekking":
            img.setAttribute("src", "./assets/img/trekking-chile-aventura.jpg");
            act.innerText = "TREKKING";
            info.innerHTML = `<i class="fa-solid fa-location-pin"></i> Volcán Villarrica`;
            texto.innerText = "'Modalidad de excursionismo que consiste en recorrer a pie largas distancias o zonas determinadas, generalmente de alta montaña y poco frecuentadas por el turismo convencional.'";
            break;
        case "Natacion":
            img.setAttribute("src", "./assets/img/natacion.jpg");
            act.innerText = "NATACIÓN";
            info.innerHTML = `<i class="fa-solid fa-location-pin"></i> Lago Cochrane`;
            texto.innerText = "'Deporte o ejercicio que consiste en nadar, en las pruebas de natación se compite en velocidad, en cualquiera de los cuatro estilos: braza, crol, espalda y mariposa.'";
            break;
        case "Ferry":
            img.setAttribute("src", "./assets/img/ferry.jpg");
            act.innerText = "FERRY";
            info.innerHTML = `<i class="fa-solid fa-location-pin"></i> Lago Llanquihue`;
            texto.innerText = "'Embarcación que realiza alternativamente el mismo recorrido entre dos puntos: especialmente la de grandes dimensiones destinada al transporte de cargas pesadas o pasajeros.'";
            break;
    }
})