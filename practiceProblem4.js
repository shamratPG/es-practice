// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result
// Print the result.

// solution:
const arrayOperation = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const maximum = Math.max(...newArray)
    return maximum;
}

const numbers1 = [45, 23, 87, 98, 45, 67];
const numbers2 = [45, 89, 58, 76, 98, 43];

console.log(arrayOperation(numbers1, numbers2));