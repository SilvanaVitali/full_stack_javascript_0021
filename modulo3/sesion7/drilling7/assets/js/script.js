const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
        tipo: "4 Cilindros en línea",
        bloque: "Aleación/Aluminio",
        desplazamiento: "1.99/1996",
        caballos: "155 @ 6500",
        lineaRoja: 6700,
        inyeccion: "Puntos Múltiples"
    }
}

let marca = vehiculo.marca ?? undefined;
let modelo = vehiculo.modelo ?? undefined;
let tipo = vehiculo.motor?.tipo ?? undefined;
let presion = vehiculo.motor?.presion ?? undefined;
let bloque = vehiculo.motor?.bloque ?? undefined;
let desplazamiento = vehiculo.motor?.desplazamiento ?? undefined;
let caballos = vehiculo.motor?.caballos ?? undefined;
let lineaRoja = vehiculo.motor?.lineaRoja ?? undefined;
let sistema = vehiculo.motor?.sistema ?? undefined;
let inyeccion = vehiculo.motor?.inyeccion ?? undefined;
let encendido = vehiculo.motor?.encendido ?? undefined;

console.log(marca);
console.log(modelo);
console.log(tipo);
console.log(presion);
console.log(bloque);
console.log(desplazamiento);
console.log(caballos);
console.log(lineaRoja);
console.log(sistema);
console.log(inyeccion);
console.log(encendido);