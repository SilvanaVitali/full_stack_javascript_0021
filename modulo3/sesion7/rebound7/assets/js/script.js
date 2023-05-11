let texto = document.querySelector("p");
let btn = document.querySelector("button");

let sed = 0;
let vehicula = 0;
let vivamus = 0;
let nam = 0;
let eros = 0;
let vestibulum = 0;
let quam = 0;
let sollicitudin = 0;
let finibus = 0;
let dictum = 0;
let morbi = 0;

function evaluacion() {
    sed ||= (sed == 6);
    vehicula ||= (vehicula == 4);
    vivamus ||= (vivamus == 3);
    nam ||= (nam == 3);
    eros ||= (eros == 3);
    vestibulum || (vestibulum == 2);
    quam || (quam == 2);
    sollicitudin || (sollicitudin == 2);
    finibus || (finibus == 2);
    dictum || (dictum == 2);
    morbi || (morbi == 2);
}

function imprimir() {
    console.log(`%csed: ${sed}`, 'color:#FF5500');
    console.log(`%cvehicula: ${vehicula}`, 'color:#FF99B2');
    console.log(`%cvivamus: ${vivamus}`, 'color:#FF99F5');
    console.log(`%cnam: ${nam}`, 'color:#BB99FF');
    console.log(`%ceros: ${eros}`, 'color:#99C5FE');
    console.log(`%cvestibulum: ${vestibulum}`, 'color:#00CEFF');
    console.log(`%cquam: ${quam}`, 'color:#01FFFE');
    console.log(`%csollicitudin: ${sollicitudin}`, 'color:#00FF9F');
    console.log(`%cfinibus: ${finibus}`, 'color:#B6FF01');
    console.log(`%cdictum: ${dictum}`, 'color:#FFFF00');
    console.log(`%cmorbi: ${morbi}`, 'color:#FFB600');
}

let regex = /\bsed\b|\bvehicula\b|\bvivamus\b|\bnam\b|\beros\b|\bvestibulum\b|\bquam\b|\bsollicitudin\b|\bfinibus\b|\bdictum\b|\bmorbi\b/gi;
btn.addEventListener('click', function () {
    texto.innerHTML = texto.innerHTML
        .replaceAll(regex, function (match) {
            if (match === 'sed') { sed++; return '<strong>UNO</strong>' };
            if (match === 'vehicula') { vehicula++; return '<strong>DOS</strong>' };
            if (match === 'vivamus') { vivamus++; return '<strong>TRES</strong>' };
            if (match === 'nam') { nam++; return '<strong>CUATRO</strong>' };
            if (match === 'eros') { eros++; return '<strong>CINCO</strong>' };
            if (match === 'vestibulum') { vestibulum++; return '<strong>SEIS</strong>' };
            if (match === 'quam') { quam++; return '<strong>SIETE</strong>' };
            if (match === 'sollicitudin') { sollicitudin++; return '<strong>OCHO</strong>' };
            if (match === 'finibus') { finibus++; return '<strong>NUEVE</strong>' };
            if (match === 'dictum') { dictum++; return '<strong>DIEZ</strong>' };
            if (match === 'morbi') { morbi++; return '<strong>ONCE</strong>' };
        })

    evaluacion();
    imprimir();

})
