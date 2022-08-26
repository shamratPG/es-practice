// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

// Solution 1:
// const simpleCalc = array => {
//     let sum = 0;
//     for (let item of array) {
//         const square = Math.pow(item, 2);
//         sum += square;
//     }
//     const average = sum / array.length;
//     return average.toFixed(2);
// }


const numbers = [56, 34, 87, 32, 54]
// console.log(simpleCalc(numbers));

// Solution 2:
const simpleCalc = array => {

    const squareArray = array.map(item => Math.pow(item, 2));

    const sum = squareArray.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const average = sum / array.length;
    return average;
}

console.log(simpleCalc(numbers));