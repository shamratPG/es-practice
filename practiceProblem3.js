// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.

// Solution 1:
const simpleCalc = array => {
    let sum = 0;
    for (let item of array) {
        const square = Math.pow(item, 2);
        sum += square;
    }
    const average = sum / array.length;
    return average.toFixed(2);
}

const numbers = [1, 2, 8, 5, 7]

console.log(simpleCalc(numbers));






// Solution 2:
// const simpleCalc = array => array.map(item => {
//     const square = Math.pow(item, 2);
// })