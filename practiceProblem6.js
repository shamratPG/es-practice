// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now return/get all the elements which are divisible by 10 using array.filter() method.

const givenArray = [33, 50, 79, 78, 90, 101, 30];
const divisibelBy10 = givenArray.filter(item => item % 10 == 0)
console.log(divisibelBy10);

// 3) Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.

const newDivisibleBy10 = givenArray.find(item => item % 10 == 0);
console.log(newDivisibleBy10)