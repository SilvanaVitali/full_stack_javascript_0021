import {generator, buscarPersonaje} from "./utils.js"

$(document).ready(function () {

    const genCod = {seccion1: generator(1, 5),seccion6: generator(6, 10), seccion11: generator(11, 15)};

    $('.seccion').each(function () {
        $(this).on('mouseenter', async () => {
            let codigo = $(this).attr("value");
            switch (parseInt(codigo)) {
                case 1:
                    const rango1 = await genCod.seccion1.next();
                    buscarPersonaje(rango1, codigo)
                    break;
                case 6:
                    const rango2 = await genCod.seccion6.next();
                    buscarPersonaje(rango2, codigo)
                    break;
                case 11:
                    const rango3 = await genCod.seccion11.next();
                    buscarPersonaje(rango3, codigo)
                    break;
            }
        })
    })

})