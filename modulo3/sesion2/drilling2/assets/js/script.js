function convert() {

    let dias = ["bigTemp", "sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    let input = document.querySelector("input");

    if (input.id == "" || input.id == "C") {
        input.setAttribute("id", "F");
        document.getElementById("bigC").innerHTML = "°F";
        for (let dia of dias) {
            let tDia = document.getElementById(dia)
            tDia.innerHTML = Math.round((tDia.innerHTML * 1.8) + 32)
        }

    } else {
        input.setAttribute("id", "C");
        document.getElementById("bigC").innerHTML = "°C";
        for (let dia of dias) {
            let tDia = document.getElementById(dia)
            tDia.innerHTML = Math.round((tDia.innerHTML - 32) * 5 / 9)
        }

    }
}