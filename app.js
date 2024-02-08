// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
const word = 'bocina';
const ulLista = document.querySelector('#lista-palabras');

const bigWords = (inputString, arrayStrings) => {
    const temp = [];
    
    arrayStrings.forEach(word => {

        if(inputString.length < word.length) {
            temp.push(word)
        }
    });

    return temp;
}

const bWords = bigWords(word, myArray);

const printingWords = (words) => {
    let output = "";

    words.forEach(word => {
        output += `<li>${word}</li>`
    });

    return output;
}

// console.log(printingWords(bWords));
ulLista.innerHTML = printingWords(bWords);