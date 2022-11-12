//******************Task 1

// let arS = [11, 2, 3, 4, 5, 6, 7, 10,20,-2,50,23];

// console.log(minmax(arS));

// function minmax (array){
//     let min = array[0];
//     let max = array[0];
//     for (let i = 0; i < array.length; i++){
//          min > array[i] ? min = array[i] : min;
//          max < array[i] ? max = array[i] : max;
//     }
//     let newAr = [min, max];
//     return newAr;
// }

//*********************Task 2

// let array = ["abc", "old_abc", "abc_lmn", "123", "old_lmn", "old_123123"];

// console.log(deleteWithPrefix(array, "abc"));

// function deleteWithPrefix(array, string){
//     let res = array.filter(str => string >= str);
//     return res;
// }

// //*********************Task 3

let arS = [11, 2, 3, 4, 5, 6, 7, 10,20,-2,50,23];

console.log(getSorted(arS));

function getSorted(array){
    let evenNotSorted = getEvenNumbers(array);
    let oddNotSorted = getOddNumbers(array);
    let evenSorted = evenNotSorted.sort((a, b) => a - b);
    let oddSorted = oddNotSorted.sort((a, b) => b - a);
    let res = evenSorted.concat(oddSorted);
    return res;
}

function getEvenNumbers(array){
        let res = array.filter(n => n % 2 == 0);
        return res;
}

    function getOddNumbers(array){
        let res = array.filter(n => n % 2 != 0);
        return res;
}


