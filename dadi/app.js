const generateButtonElementDOM = document.getElementById('genera');

let mieiNumeri1 
let mieiNumeri2
let numeriBanco1
let numeriBanco2 

generateButtonElementDOM.addEventListener('click', function () {

    for (let i = 0; i < 1; i++){
        mieiNumeri1 = Math.floor((Math.random() * 6) + 1);

        numeriBanco1 = Math.floor((Math.random() * 6) + 1);
    }

    for (let i = 0; i < 1; i++){
        mieiNumeri2 = Math.floor((Math.random() * 6) + 1);

        numeriBanco2 = Math.floor((Math.random() * 6) + 1);
    }

    const miaSomma = (mieiNumeri1 + mieiNumeri2);
    const sommaBanco = (numeriBanco1 + numeriBanco2);

    if (miaSomma > sommaBanco){
        console.log('COMPLIMENTI, HAI VINTO!');
    } else {
        console.log('PECCATO, HAI PERSO!');
    }

})