

//Recupero elementi dalla traccia 
const countdownElement = document.getElementById('countdown');
const numberListElement = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const messageElement = document.getElementById('message');
const inputGroup = document.getElementById('input-group');
const instructionElement = document.getElementById('instructions');


//impostazioni iniziali quello che io so da traccia 

const min = 1;
const max = 50;
const totaleNumbers = 5;
let time = 10;

//inserisco il tempo nel countdown 
countdownElement.innerHTML = time;

//fase di elaborazione

//genero 5 numeri random 

const numbers = getDifferentRandomNumbers(min, max, totaleNumbers); ù
console.log(numbers);//piccola validazione 



