//Switch - Specify many alternatives

let x = 5;

if(x == 1) {
    console.log("x is equal to 1");
}else if (x == 2) {
    console.log("x is equal to 2");
}else if (x == 3) {
    console.log("x is equal to 3");
}else if (x == 4) {
    console.log("x is equal to 4");
}else if (x == 5) {
    console.log("x is equal to 5");
} else {
    console.log("No match found.");
}

//자주 쓰는 구문
switch (x) {
    case 1:
        console.log("x is equal to 1");
        break;
    case 2:
        console.log("x is equal to 2");
        break;
    case 3:
        console.log("x is equal to 3");
        break;
    case 4:
        console.log("x is equal to 4");
        break;
    case 5:
        console.log("x is equal to 5");
    break;
    default: "No match found.";
}
