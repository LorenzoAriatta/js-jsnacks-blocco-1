console.log('JS OK!');

// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero

const calculate = document.getElementById('sum-btn');
let inputNumber = parseInt(document.getElementById('inputNumber')).value;
let finalResult = document.getElementById('result');


calculate.addEventListener('click', function () {

    let numbers = inputNumber;
    sum = 0;

    while (numbers) {
        sum += numbers % 10;
        numbers = Math.floor(numbers / 10);
    }

    let theResult = finalResult;
    theResult.value = sum;
})