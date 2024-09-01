

//Recupero elementi dalla traccia 
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('number-list');
const form = document.getElementById('anwer-form');
const messageElement = document.getElementById('message');
const inputGroup = document.getElementById('input-group');
const instructionElement = document.getElementById('instructions');
const inputFields = document.querySelectorAll('input');

//impostazioni iniziali quello che io so da traccia 

const min = 1;
const max = 50;
const totaleNumbers = 5;
let time = 10;

//inserisco il tempo nel countdown 
countdownElement.innerHTML = time;

//fase di elaborazione

//genero 5 numeri random 

const numbers = getDifferentRandomNumbers(min, max, totaleNumbers);
console.log(numbers);//piccola validazione 


//inizio il conto alla rovescia 

//inserisco i numeri in pagina 

let items = '';
for (let i = 0; i < numbers.length; i++) {

    items += `<li>${numbers[i]}</li>`;
}

numberListElement.innerHTML = items;

const interval = setInterval(() => {

    countdownElement.innerText = --time; //decrementa e poi lo stampa 

    if (time === 0) {
        clearInterval(interval);

        form.classList.remove('d-none');
        numberListElement.classList.add('d-none');
    }


}, 1000)





// controllo del form


form.addEventListener('submit', event => {

    event.preventDefault();//blocco l'invio del form 
    const userGuesses = [];


    for (let i = 0; i < inputFields.length; i++) {
        const input = inputFields[i];//scorro 


        const value = parent(input.value);
        if (!isNaN(value && value >= min && value <= max && !userGuesses.includes(value)))//controllo dei duplicati 
            //prendo il valore 
            userGuesses.push(value);//devo mettere qui quello converito 

    }


    if (userGuesses.length !== inputFields.length) {

        //così facendo posso inserire un messaggio di errore 
        messageElement.innerText = 'sono stati inseriti numeri non validi o dublicati ';

        return;// non ho capito 
    }

    //validazione 
    console.log(userGuesses);


}) 