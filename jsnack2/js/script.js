console.log('JS OK!');

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array.

const evenHtml = document.getElementById('Even');
const oddsHtml = document.getElementById('Odds');


const oddsNumbers = [];
const evenNumbers = [];


for (let i = 0; i < 6; i++) {

    let askedNumber = parseInt(prompt('Inserisci un numero'));

    if (askedNumber % 2 === 1) {

        oddsNumbers.push(askedNumber);
        console.log(`Numeri dispari inseriti: ${askedNumber}`);
        oddsHtml.innerText = `Numeri dispari inseriti: ${oddsNumbers}`

    } else {

        evenNumbers.push(askedNumber);
        console.log(`Numeri pari inseriti: ${askedNumber}`);
        evenHtml.innerText = `Numeri pari inseriti: ${evenNumbers}`;

    }

}

console.log(oddsNumbers);