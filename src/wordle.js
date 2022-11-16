const word = "apple"
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess")
let counter = 0;
const alertElement = document.querySelectorAll(".alert-guess")

function onChange(event){
    const wordGuess = event.target.value;
    if (wordGuess.length != N_LETTERS){
        alert(`Word should contain ${N_LETTERS} letters`)
    }
    else {
        const wordAr = Array.from(wordGuess);
        if (word == wordGuess) {
            document.getElementById("alert-guess").innerHTML = 'Congratulations - you have guessed the word';
        }
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        counter++;
        if (counter >= 4){
            document.getElementById("alert-notguess").innerHTML = 'Sorry - your guess trials have ended up';
        }
        const colors = wordAr.map((l, i) => {
            let index = word.indexOf(l);
            let res = 'red';
            if (index > -1) {
                res = 'yellow';
                if (wordAr[i] == word[i]) {
                    res = 'green'
                }
            }
            document.getElementById("counter").innerHTML = counter;
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color = c);
    }
}