


/*funzione generica che mi da x numeri diversi  */

const getDifferentRandomNumbers = (min, max, tot) => {

    const numbers = [];

    /*fino a quando sono meno di 5 continua a generare */
    while (numbers.length < tot) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(randomNumber)) numbers.push(randomNumber);//evitare i numeri diversi 

    }

    return numbers;
}