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