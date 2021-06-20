//Conditional Statements
//If      - If a spectified condition is true
//Else If - Happens if the "IF" is false
//Else    - Happens if the if & else if are false
//Switch  - Specify many alternatives

let bool = false;

if(bool) {
    console.log("This statement is true"); //참일 때

} else {
    console.log("This statement is False"); //거짓일 때

}

let x = 5;
let y = 10;

if (x == 6 && y == 10) {
    console.log("True!");

}else if(x == 8 || y == 6) {
    console.log("False");
} else {
    console.log("Both statements are false!");
}