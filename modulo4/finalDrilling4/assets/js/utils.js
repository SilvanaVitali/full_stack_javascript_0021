export {generator, buscarPersonaje}

class Personaje {
    constructor(id, nombre, estatura, peso) {
        this.id = id;
        this.nombre = nombre;
        this.estatura = estatura;
        this.peso = peso;
    }
}

function* generator(desde, hasta) {
    for (let i = desde; i <= hasta; i++) {
        yield getPersonaje(i)
    }
}

const getPersonaje = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(`https://swapi.dev/api/people/${id}/`);
            let data = await response.json();
            let { name, height, mass } = data;
            let personaje = new Personaje(id, name, height, mass);
            resolve(personaje)
        } catch (error) {
            reject();
        }
    })
}

const mostrarPersonaje = (personaje, codigo) => {
    $(`#seccion${codigo}`).append(`                
    <div id="${personaje.id}-${codigo}" class="d-flex card mb-3 me-3 col-11 col-sm-7 col-md-5 col-lg-3 shadow detalle" style="max-width: 540px;">
        <div class="d-flex g-0">
            <div class="mt-4">
                <div class="circulo color${codigo} ms-4"></div>
            </div>
            <div class="flex-grow-1">
                <div class="card-body py-4">
                    <h5 class="card-title">${personaje.nombre}</h5>
                    <p class="card-text">Estatura: ${personaje.estatura} cm. Peso: ${personaje.peso} kg.</p>
                </div>
            </div>
        </div>
    </div>`);
}

const buscarPersonaje = (rango, codigo) => {
    if (rango.done) {
        console.log("No hay mas personajes en este rango");
    } else {
        rango.value.then((personaje) => {
            mostrarPersonaje(personaje, codigo)
        }).catch((error) => {
            console.log(`Error: ${error}`);
        })
    }
}