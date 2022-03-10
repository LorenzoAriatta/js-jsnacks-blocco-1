console.log('JS OK!');

// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero


/*
let value = inputNumber;
console.log(value);
sum = value
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
}*/




let inputNumber = document.getElementById('numeriInseriti');

let totale = document.getElementById('totale');

let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function () {

    let sum = 0;

    let userNumber = parseInt(prompt('Inserisci un numero di quattro cifre'));

    inputNumber.innerText = `Numeri inseriti: ${userNumber}`;
    inputNumber.style.color = 'green';

    while (userNumber) {

        sum += userNumber % 10;

        userNumber = Math.floor(userNumber / 10);

    }

    totale.innerText = `Il risultato è: ${sum}`;
    totale.style.color = 'crimson';

})
