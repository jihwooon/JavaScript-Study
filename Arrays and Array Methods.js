//Arrays and Array Methods

//Brackets

const jobs = ['Software dev', 'HRAnalyst', 'Marketing', 'Finance'];
console.log(jobs);

//Array construcotr
const age = new Array(22, 33, 55,34,12,16,);
console.log(age);

//Mix data types
const mixed = [24, 'Dary', 'Amsterdam', undefined, true];
console.log(mixed);

let test;
//Get the length of the array
test = age.length;
console.log(test);

//Check if it is a array
test = Array.isArray(age);
console.log(test);

//Get specific value
//Index always starts with 0
test = jobs[0];

console.log(test);

//Add value to array
jobs.push('Data analyst');
console.log(jobs);

//Delete value
jobs.pop();

//Deletes first value
test = jobs.shift();
console.log(test);

//Unshift
test = jobs.unshift('Software dev');
console.log(test);

//Create a complete string
test = jobs.join(' ');
console.log(test);

//Reverse
//The changes will be permanently
test = jobs.reverse();
console.log(test);

//Sort
test = age.sort();
console.log(test);

test = mixed.sort();
console.log(test);

