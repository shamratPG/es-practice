//Problem 1:
// Write an arrow function that will take 3 parameters, will multiply the parameters and will return the result.

// Solution 1:
// const multiply = (value1, value2, value3) => value1 * value2 * value3;

// Solution 2:
const multiply = (value1, value2, value3) => {
    if (typeof value1 == "number" && typeof value2 == "number" && typeof value3 == "number") {
        return value1 * value2 * value3;
    } else {
        console.log('This fucntion will only take numbers as input');
    }
}

// console.log(multiply(3, 4, 5));



//Problem 2:
// Write the following sentence in three lines and print the result: I am a web developer. I love to code. I love to eat biryani.

//Solution:
let personName = 'Shamrat'
const multilineStirng = `My name is ${personName}.
I am a web developer. 
I love to code. 
I love to eat biryani.`;

console.log(multilineStirng);


