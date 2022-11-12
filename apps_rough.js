//console.log("Hello world");
// for (let i = 0; i < 3; i++) {
//     setTimeout(function(){console.log(i)
//     }, (i + 1) * 5000);
// }
// for (var i = 0; i < 3; i++) {
//     setTimeout(function(){console.log(i)})
// }
// function sum(op1, op2){
//     let res = op1 + op2
//     return res;
// }
// let op1 = 10;
// let op2 = 20;
// let res = sum(op1, op2);
// console.log(res);

// let x = 1234;
// let res = sum(x);

// function sum(x){
//     if (x < 0) 
//     {
//         x = x * (-1);
//     }
//     let z = 0
//     for(;x > 1; x = x / 10)
//         {
//             let i = Math.trunc(x % 10);
//             z = z + i;
//         }
//     console.log(z);
// }

// let strNum1 = "123";
// let strNum2 = '9';
// console.log(strNum1 + strNum2);
// console.log(strNum1 - strNum2);
// console.log(strNum1 > strNum2);
// //conversions from string to number
// let num1 = +strNum1;
// let num2 = +strNum2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 > num2);
// let strNumStr = '12.3ab';
// let numStr = +strNumStr;
// console.log(numStr);
// let num = parseInt(strNumStr);
// console.log(num);
// if (isNaN(numStr)) {
//     console.log("numStr is NaN")
// }

// let num10 = 123;
// let strNum10 = "" + num10;
// let strNum16 = num10.toString(16);
// console.log(strNum10, strNum16)

//conversion from Morse code to number
//symbol "." -> 0; "-" -> 1

// function fromMorseToNumber(morseCode){
//     let result = 0;
//     for(let i = 0; i < morseCode.length; i++){
//         let code = morseCode[i] == '.' ? 0 : 1;
//         result = result*2 + code;
//     }
//     return result;
// }
// console.log(fromMorseToNumber('-.-.---...-.-.---.'));

// function fromNumberToMorse(number) {
//     number = Math.abs(number);
//     let res = "";
//     do {
//         let digit = number % 2;
//         let sym = digit == 0 ? '.' : '-';
//         res = sym + res;
//         number = Math.trunc(number / 2);
//     }while(number != 0);
// }
// console.log(fromNumberToMorse(178350));

// //getting code from symbol
// console.log('abc' .charCodeAt(0));

// //getting symbol from code
// console.log(String.fromCharCode(126));

// function getSymbol(digit) {
//     let codeA = 'a'.charCodeAt();
//     return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10);
// }
// function fromNumberToString(number, base) {
//     number = Math.abs(number);
//     let res = "";
//     do 
//     {
//         let digit = number % base;
//         let sym = getSymbol(digit);
//         res = sym + res;
//         number = Math.trunc(number/base);
//     } while (number != 0);
//     return res;
// }

// function getDigit(symbol){
//     let codeA = 'a'.charCodeAt();
//     let res = symbol < '9' ? symbol : symbol.charCodeAt() - codeA + 10;
//     return res;
// }
// function fromStringToNumber (string, base){
//     let result = 0;
//     for (let i = 0; i < string.length; i++)
//     {
//         let digit = getDigit(string[i]);
//         result = result * base + digit;
//     }
//     return result;
// }

// //console.log(fromNumberToString(900550, 36));
// console.log(fromStringToNumber("java", 36));

// let ar = [];
// ar [10000] = 100;
// ar [1] = [1, 2, 3];
// console.log(ar.length);
// ar[0] = "hello";
// console.log("10000-th element = ", ar[10000]);
// console.log("zero element = ", ar[0]);
// console.log("1-st element = ", ar[1]);

// let str = "Hello";
// let arStr = Array.from(str);
// console.log("String 'Hello' ->  array is ", arStr);
// // for (let i = 0; i < arStr.length; i++){
// //     console.log("element at index ", i, arStr[i]);
// // }
// function println(element, index, array){
//     console.log("element at index ", index, element);
// }
// arStr.forEach(println);
// let arCodeAscii = arStr.map(function(symbol, index){
//     return index % 2 == 0 ? symbol.charCodeAt() : symbol;
// })
// console.log(arStr, arCodeAscii);

// let SumAscii = arStr.reduce(function(res, cur){
//     return res + cur.charCodeAt ();
// }, 0)
// console.log("sum of ascii", SumAscii)

// console.log(arStr.reduce(function(res, cur){
//     return res + cur;
// }, ""));

// function checkTeudatZeut(teudatStrNumber){
//     let strNumber = teudatStrNumber.toString();
//     let arrayId = Array.from(strNumber);
//     console.log(arrayId)
//     if (arrayId.length == 9){
        
//         for (let i = 0; i < arrayId.length; i++){
//             let sum = 0;
//             let digit = arrayId[i];
//             if (digit % 2 != 0){
//                 digit = digit * 2;
//                 if (digit > 9){
//                     let num1 = digit % 10
//                     let num2 = Math.trunc(digit/10)
//                     digit = num1 + num2;
//                 } 
//             }
//             sum = sum + digit;
//             console.log(sum)
//             arrayId[i] = digit;
//         }  

//     }
//     //console.log(arrayId)
// }

// function checkTeudatZeut(teudatStrNumber){
//     let arrayForSum = getArrayForSum(teudatStrNumber);
//     let sum = getSum(arrayForSum);
//     return sum % 10 == 0;
// }
// function getArrayForSum(teudatStrNumber){
//     let array = Array.from(teudatStrNumber);
//     // let res = [];
//     // for (let i = 0; i < array.length; i++) {
//     //     res[i] = getCurrentNumber(array[i], i);
//     // }
//     //return res;
//     return array.map(getCurrentNumber);
// }
// function getCurrentNumber(element, index){
//     return index % 2 == 0 ? +element : getNumberOddIndex(element);
// }
// function getNumberOddIndex(element){
//     let res = element * 2;
//     if (res > 9) {
//         res -= 9;
        
//     }
// }
// function getSum(array) {
//     // let res = 0;
//     // for (let i = 0; i < array.length; i++){
//     //     res += array[i];
//     // }
//     // return res;
//     return array.reduce(function(res, cur){
//         return res + cur;
//  }, 0);
// }

// console.log(checkTeudatZeut('133456789'));

// let numbers = ['123456782', '1234', 'abcd123', '123456783'];
// numbers.forEach(function (e) {
//     console.log('teudat zehut: ${e}, return of the method checkTeudatZeut: ${checkTeudatZeut}')
// });

//****************************************Task 1

// let ulSurround = ["abc", "lmn", "cd"];

// console.log(surrScript(ulSurround));

// function surrScript(array){
//     for (let i = 0; i < array.length; i++){
//      array[i] = addUi(array[i]);
//      }
//     array.push("</ul>");
//     array.splice(0, 0, "<ul>");

//      return array;
// }
// function addUi(value){
//     value = "<li>"+value+"</li>";
//     return value
// }

//****************************************Task 1 alternative

// function ulSurround(strings){
//     let res = strings.map(str => `<li>${str}</li>`)
//     res.splice(0,0,"<ul>");
//     res.push("</ul>");
//     return res;
// }
// let ar = ["abc", "lmn", "cd"];
// console.log(`input ${ar} output: ${ulSurround(ar)}`);


//****************************************Task 2

// let strings = ["abc", "lmn", "cd", "abc", "abc"];

// count(strings, "abc");

// function count(array, string){
//     let counter = 0;
//     for (let i = 0; i < array.length; i++){
//             array[i] == string ? counter++ :  counter = counter;        
//         }
//     console.log("count of '", string, "'=", counter); 
// }

//****************************************Task 2 alternative

// let ar = ["abc", "lmn", "cd", "abc", "abc"];
// function count(array, element){
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }
// let str = "abc";
// console.log(count(ar, str));

//****************************************Task 3

// let arS = [1, 2, 3, 4, 5, 6, 7];
// let arD = [10, 20, 30, 40, 50, 60, 70];

// console.log (arrayCopy(arS, 3, arD, 4, 3));

// function arrayCopy(src, srcPos, dst, dstPos, length){
//     let srcEndPos = srcPos + length;
//     let srcSliced = src.slice(srcPos, srcEndPos);
//     let dstSlicedBeg = dst.slice(0, dstPos);
//     let dstSlicedEnd = dst.slice(dstPos, dst.length);
//     let resArray = dstSlicedBeg.concat(srcSliced, dstSlicedEnd);

//     return resArray;
// }

//****************************************Task 3 alternative

// let arS = [1, 2, 3, 4, 5, 6, 7];
// let arD = [10, 20, 30, 40, 50, 60, 70];

// console.log (arrayCopy(arS, 3, arD, 4, 3));

// function arrayCopy(src, srcPos, dst, dstPos, length){
//     let arForCopy = src.slice(srcPos, srcPos+length);
//     arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
    
//     return resArray;
// }

//****************************************Task 4

// let numbers = [1,2,3,4,5,6,7];
// console.log(move(numbers,3,-1))

// function move(array, index, offset){
//     let newIndex = offset + index;
//     let value = array[index];
//     array.splice(index, 1);
//     array.splice(newIndex, 0, value);
//     return array;
// }

//***************************clas work 12.11.2022

// let arS = [1, 2, 3, 4, 5, 6, 7];

// function getEvenNumbers(numbers){
//     let res = numbers.filter(n => n % 2 == 0);
//     return res;
// }

// console.log(getEvenNumbers(arS))
