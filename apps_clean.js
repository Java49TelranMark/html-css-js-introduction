const original = "yellow";
const anagram = "weelly";

const letter = {};

console.log(isAnagram(original, anagram));

function isAnagram(orig, anag){
    let origAr = Array.from(orig);
    let anagAr = Array.from(anag);

    if (origAr.length < anagAr.length){
        return "too much letters"
    }
    if (origAr.length > anagAr.length){
        return "too few letters"
    }

    countLetter(origAr);

    for (let i = 0; i < anagAr.length; i++){
        if (letter[anagAr[i]] == undefined){
            return "no letter " + anagAr[i] + " in the original word";
        }
        letter[anagAr[i]]--;
        if (letter[anagAr[i]] < 0){
            return "too much letters " + anagAr[i];
        }}return "anagram";
    }
function countLetter(string) {
    string.forEach(element => {
    if (letter[element]) {
        letter[element]++;
        } else {
        letter[element] = 1;
        }
        });
    return letter;
    }