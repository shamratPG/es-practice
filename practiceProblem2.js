// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the name of your friends
// b) Check if the length of each element is even, push elements with even length to a new array and return the result
// Print the result.

const evenLengthNames = array => array.filter(item => item.length % 2 == 0);
const friends = ['Abul', 'Kamal', 'Robiul', 'Barkar', 'Golam', 'Ashok'];

console.log(evenLengthNames(friends));

