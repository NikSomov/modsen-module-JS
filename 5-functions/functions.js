//func def
function bubbleSort(arr) {
  "use strict";
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

//parameter
const arr = [5, 2, 8, 3, 1, 6, 4];

//func call
const sortedArr = bubbleSort(arr);
console.log(`Sorted array: ${sortedArr}`);