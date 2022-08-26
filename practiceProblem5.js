// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number.

const oddArray = [1, 3, 5, 7, 9];

//Solution 1: (using for loop)
// function makeEven(array) {
//     let evenArray = [];
//     for (let i = 0; i < array.length; i++) {
//         array[i] += 1;
//         evenArray.push(array[i]);
//     }
//     return evenArray;
// }

//Solution 2: (using for array.map)
function makeEven(array) {
    const evenArray = array.map(item => item + 1);
    return evenArray;
}

console.log(makeEven(oddArray));







