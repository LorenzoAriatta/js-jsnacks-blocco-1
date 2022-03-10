console.log('JS OK!');

// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero

const calculate = document.getElementById('sum-btn');


calculate.addEventListener('click', function () {

    let inputNumber = parseInt(document.getElementById('inputNumber'));
    let value = inputNumber.value;
    let sum = 0;
    console.log(value);

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }

    let finalResult = document.getElementById('result');
    finalResult.value = sum;

})