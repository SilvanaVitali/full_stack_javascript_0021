let ejercicios = ['sentadilla', 'banco', 'peso muerto', 'prensa'];

function* generator(diasTotales, frecuencia) {
    let index = 0;
    let dia = 1;
    while (dia <= diasTotales) {
        let rutina = `Día ${dia}: ${ejercicios[index]}`
        yield rutina
        dia += frecuencia
        index++
        if (index == ejercicios.length) {
            index = 0;
        }
    }
}

function imprimir(diasTotales, frecuencia, gen, dias) {
    let dia = 1;
    switch (dias) {
        case 5:
            while (dia <= diasTotales) {
                if (dia % 3) {
                    console.log(gen.next().value);
                } else {
                    gen.next();
                }
                dia += frecuencia
            }
            break;

        case 6:
            while (dia <= diasTotales) {
                if (dia % 7) {
                    console.log(gen.next().value);
                } else {
                    gen.next();
                }
                dia += frecuencia
            }
            break;

        default:
            while (dia <= diasTotales) {
                console.log(gen.next().value);
                dia += frecuencia
            }
            break;
    }
}

document.getElementById("formRutina").addEventListener('submit', function (e) {
    e.preventDefault();
    let semanas = parseInt(document.getElementById("semanas").value);
    let dias = parseInt(document.getElementById("dias").value);
    let diasTotales = semanas * 7
    let diasEjercicios = semanas * dias
    let frecuencia = Math.round(diasTotales / diasEjercicios);
    console.log(`Semanas: ${semanas}`);
    console.log(`días: ${dias}`);
    let gen = generator(diasTotales, frecuencia);
    imprimir(diasTotales, frecuencia, gen, dias);
})
