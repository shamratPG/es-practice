// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.

// Solution 1: (using for loop)
const givenArray = [1, 9, 17, 22];

// function add(array) {
//     let sum = 0;
//     for (item of array) {
//         sum += item;
//     }
//     return sum;
// }

// Solution 2: (using reduce() method)

function add(array) {
    return array.reduce((previous, current) => previous + current, 0)
}
console.log(add(givenArray));