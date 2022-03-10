console.log('JS OK!');

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let userName = document.getElementById('userName');
const btnAccess = document.getElementById('btnAccess');

const invitati = ["aldo", "giovanni", "giacomo", "al", "john", "jack"];


btnAccess.addEventListener('click', function () {

    let nameInput = userName.value;

    let vaildName = false;

    if (nameInput) {

        for (let i = 0; i < invitati.length; i++) {


            if (nameInput.trim().toLowerCase() === invitati[i]) {

                vaildName = true;

            }
        }

    }

    if (vaildName) {
        console.log('Benvenuto alla festa!!')
    } else {
        console.log('Mi dispice, ma non sei sulla lista!')
    }


})
