let phrase = document.getElementById('phrase');
let phraseToDivide = document.getElementById('phrase-divide');
let reverse = document.getElementById('reverse');
let result = document.getElementById('result');


phrase.addEventListener('input', () => {
    phraseToDivide.innerText = phrase.value;
    let words = phraseToDivide.innerText.split(' ');
    result.innerText = "";
    words.forEach(word => {
        reverseWord(word);
    });
});

phraseToDivide.addEventListener('mouseover', () => {
    let words = phraseToDivide.innerText.split(' ');
    words.forEach(elem => {

    });
});

reverse.addEventListener('click', () => {
    let words = phraseToDivide.innerText.split(' ');
    result.innerText = "";
    words.forEach(word => {
        reverseWord(word);
    });
});

function reverseWord(word) {
    if(word.length < 4)
    {
        result.innerHTML += `${word + word.split('').reverse().join('').slice(1)} `;       
        return;
    }
    let divideCount = Math.floor(word.length / 2);
    let firstHalf = word.slice(0, divideCount);
    let secondHalf = word.slice(divideCount, word.length);
    let firstReversedWord = firstHalf + firstHalf.split('').reverse().join('').slice(1);
    let secondReversedWord = secondHalf.split('').reverse().join('') + secondHalf.slice(1);
    result.innerHTML += `${firstReversedWord} или ${secondReversedWord} `;
}
