//Log to console
console.log('Hi my name is John');

console.log(1234);


//Console error
console.error('This is error');

//Console. a table
console.table({a:1, e:2});


// var - let - const


//Naming conventions
//Do not use any JS reserved keywords (console)
//Should not start with a number (0-9)
//Alwats start with a letter and underscore
//Case sensitive - Name != name
//Camel case 


//Declare variables
var name  = 'Dary';
console.log(name);
name = 'Steve';
console.log(name);

//Variable without value
var job;
console.log('job');

job = 'javaScript Developer';
console.log(job);

//let
let newName = 'John';
console.log(newName);

//Const
const car = 'Mercedes';
console.log(car);

//Have to assign it to a value
const person =  {
    name: 'John',
    age: 30

};

person.name = 'Johnny'; //상수 호출 중 name 부분
console.log(person);

