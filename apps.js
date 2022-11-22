//function getAddressKey() {
   
    //     return "address";
    // }
    // const person = {id: 123, first_name: 'Vasya',
    //  last_name: 'Ivanov', year: 2000, address: {city: 'Lod',
    //   street: 'Sokolov', app: 100}
    // };
    // const name1 = getAddressKey();
    
    // console.log(person[name1])
    // const personArr = [123, 'Vasya', 'Ivanov', 2000,
    //  ['Lod', 'Sokolov', 100]]
    //  console.log(personArr[3])
    //  console.log(person.address);
    //  function displayOccurrences(strings) {
    //     const occurrences = {};
    //     strings.forEach(element => {
    //         if (occurrences[element]) {
    //             occurrences[element]++;
    //         } else {
    //             occurrences[element] = 1;
    //         }
    //     });
    //     //console.log(Object.entries(occurrences));
    //     const occurrencesAr = Object.entries(occurrences)
    //     occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
    //     console.log(occurrencesAr);
    
    //  }
    //  const x = {};
    //  const string = "abc";
    //  x[string] = 1;
    //  console.log(x);
    //  x[string]++;
    //  console.log(x);
    // const strings = ["a","opr","lmn", "abc", "lmn","abc", "lmn", "lmn", "abc", "a"];
    // displayOccurrences(strings);

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

// let arS = [11, 2, 3, 4, 5, 6, 7, 10,20,-2,50,23];

// console.log(getSorted(arS));

// function getSorted(array){
//     let evenNotSorted = getEvenNumbers(array);
//     let oddNotSorted = getOddNumbers(array);
//     let evenSorted = evenNotSorted.sort((a, b) => a - b);
//     let oddSorted = oddNotSorted.sort((a, b) => b - a);
//     let res = evenSorted.concat(oddSorted);
//     return res;
// }

// function getEvenNumbers(array){
//         let res = array.filter(n => n % 2 == 0);
//         return res;
// }

//     function getOddNumbers(array){
//         let res = array.filter(n => n % 2 != 0);
//         return res;
// }

///////////////////////////////////////////////////////CW

// function getAddressKey() {
//         return "address";
//     }
//     const person = {id: 123, first_name: 'Vasya',
//     last_name: 'Ivanov', year: 2000, address: {city: 'Lod', street: 'Sokolov', app: 100}
//     };
// const name1 = getAddressKey();
// console.log(person[name1]);

///////////////////////////////////////////////////////////////

// const personArr = [123, 'Vasya', 'Ivanov', 2000, ['Lod', 'Sokolov', 100]];
// console.log(personArr[3]);

     
// function displayOccurrences(strings) {
//     const occurrences = {};
//     strings.forEach(element => {
//     if (occurrences[element]) {
//         occurrences[element]++;
//         } else {
//         occurrences[element] = 1;
//         }
//     });
//     console.log(occurrences);
//     // // console.log(Object.entries(occurrences));
//     // // const occurrencesAr = Object.entries(occurrences)
//     // // occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
//     // // console.log(occurrencesAr);
//     // }
// // const x = {};
// // const string = "abc";
// // x[string] = 1;
// // console.log(x);
// // x[string]++;
// // console.log(x);
// const strings = ["a","opr","lmn", "abc", "lmn","abc", "lmn", "lmn", "abc", "a"];
// displayOccurrences(strings);

//////////////////////////////////////////////