// // v - 1 (роботает)
// const array = [1, 2, 3, 1, 5, 6, 1, 2, 5];

// const newArray = array.filter(function (value) {
//   return array.indexOf(value) !== array.lastIndexOf(value);
// });

// function unique(array) {
//  let result = [];

//   for (let a of newArray) {
//     if (!result.includes(a)) {
//       result.push(a);
//     }
//   }
//   return result;
// }

// const newArray2 = unique(newArray);
// console.log(newArray2);

// в 2 (роботает)

// const array = [1, 2, 3, 1, 5, 6, 1, 2, 5];

// const checkRepeatNumberRow = function (array) {
//   let newArray2 = []
//   for (let index = 1; index < newArray.length; index++) {
//     if (newArray[index] === newArray[index + 1]) {
//       newArray2.push(newArray[index]);
//     }
//   }
//   return newArray2;
// }

// function copySorted(array) {
//   return array.slice().sort();
// }

// let newArray = copySorted(array);
// newArray2 = checkRepeatNumberRow(newArray);

// console.log(newArray2)



// v -3 (не работает)
// const array = [1, 2, 3, 1, 5, 6, 1, 2, 5];

// const checkRepeat = function (array) {
//   for (let index = 0; index < array.length; index++) {
//     for (let j = index+1; j < array.length; j++) {
//         if (array[index] === array[j]) {
//           return true;
//         }
//     }
//   }
//   return false;
// }
// const newArray = array.filter(checkRepeat);
// console.log(newArray);


// v -4 (не работает)
// const array = [1, 2, 3, 1, 5, 6, 1, 2, 5];

// const checkRepeat = function (а) {
//     for (let a of array){
//       if (a !== a || array.indexOf[a] === array.indexOf[a]) {
//         return false;
//       }
//     }
//   return true;
// }

// const newArray = array.filter(checkRepeat);
// console.log(checkRepeat(array));