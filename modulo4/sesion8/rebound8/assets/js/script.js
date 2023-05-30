async function obtenerData() {
    try {
        const result = await fetch('https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/');
        const data = await result.json();
        return data;
    } catch (error) {
        throw new Error('Error al consultar la api')
    }
}

async function buscarComuna(comuna) {
    try {
        let data = await obtenerData();
        let infoComuna = data.find(item => item.comuna === comuna);
        return infoComuna
    } catch (error) {
        throw new Error('Comuna ingresada no existe');
    }
}

document.querySelector("input").addEventListener('click', () => {
    document.querySelector("p").innerHTML = "";
    document.querySelector("input").value = "";
})

document.querySelector("button").addEventListener('click', async () => {
    try {
        let input = document.querySelector("input").value;
        let comuna = input.trim().toLowerCase().replace(/(?:^|\s)\S/g, (x) => x.toUpperCase());
        let datosComuna = await buscarComuna(comuna);
        document.querySelector("p").innerHTML = `Resultados:<br>
            Comuna: ${datosComuna.comuna}<br>
            Región: ${datosComuna.region}<br>
            La concentración de la contaminación en el aire es ${datosComuna.realtime[0].tableRow.value} &micro;g/m3<br>
            La calidad del aire es ${datosComuna.realtime[0].tableRow.status}`
    } catch (error) {
        console.log(error);
    }
})