//Function 함수
//Camel Case

//Each word after the first one is a capital

//myFunctionThatiCreated

function showMessage() { //2번
    console.log("This is our first function"); //3번

}

showMessage(); //함수 출력 1번

//Why to work with functions
//Avoid repitition
//Easier to read
//Easier to update code

function printOutMyName(firstName, lastName, age, dd) {//파라미터 안에 들어감
    console.log("My name is " + firstName+ " " + lastName + " " + age + " " + dd); // 출력

}
//Arguments
printOutMyName("jihwooon", "Nazer", 24, "Amsterdam"); //jihwooon 함수에 들어가서

// Function with a return value
function addNumbers(num1, num2) {
    return num1 + num2
}

addNumbers(10,10);

console.log("The outcome is" + " " +addNumbers(10,10));
console.log(addNumbers(10,10));
console.log(addNumbers(10,10));
console.log(addNumbers(10,10));
console.log(addNumbers(10,10));
console.log(addNumbers(10,10));