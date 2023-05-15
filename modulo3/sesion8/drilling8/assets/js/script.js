let sitio = {
    nombre: "ecamp"
};

var manejador = {
    get(target, key) {
        console.log(`GET ${key}`);
        return Reflect.get(target,key)
    },

    set(target, key, value){
        target[key]=value;
        console.log(`SET ${key}=${target[key]}`);
    }
}

var prox = new Proxy(sitio,manejador);

let nombre = prox.nombre;
prox.nombre= "ECAMP";
console.log(nombre);