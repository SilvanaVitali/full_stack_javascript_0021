function calculo(gradosF) {
    return new Promise (resolve => {
        resolve((5/9)*(gradosF - 32));
    })
}

async function convertirTemperatura (gradosF) {
    const gradosC = await calculo(gradosF);
    document.getElementById("tempC").innerHTML = `${gradosC}°C`;
}

document.querySelector("button").addEventListener('click', () => {
    const tempF = parseInt(document.getElementById("tempF").value);
    convertirTemperatura(tempF);
})
