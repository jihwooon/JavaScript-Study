// Loops and Iterations
// While Loop
// Do-While Loop
// Do-While Loop
// For loop
// For-in Loop
// For-of Loop

 let val = 1;
//
// // While loop
// // True = continue False = stop
// while (val <= 10) {
//     console.log("Number: " + val);
//     val += 2;
//
// }

//Do while loop
// Initialization ; Condition ; Expression
/*
do {
    console.log("Number" + val);
    val++;

}while(val < 1);
*/

//For loop
for(let i = 0; i < 10; i++) {
    console.log("Number: " + i);

}
//For in loop

let person = {
    name: "John",
    age: 24,
    job: "Software Developer",
    city: "Amsterdam"

};

for (let x in person) {
    console.log(x + " is " + person[x]);

}

//For of loop
let cars = new Array('BMW', 'Volvo', 'Audi');

for (let i in cars) {
    console.log(cars[i]);
}
