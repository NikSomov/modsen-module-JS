//func def
function sum(arr) {
    "use strict";
    const half = Math.floor(arr.length / 2);
    return arr.slice(0, half).reduce((acc, current) => acc + current, 0);
}
  
//parameter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//func call
const result = sum(arr);
console.log(`Sum of the first half of the array: ${result}`);