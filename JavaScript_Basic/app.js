//Type Conversion
let val;


//Number to string
val = String(2);
val = String(2 + 2);

//Boolean to string
val = String(false);

//Data to string
val = String(new Date());

//Array to string
val = String([1,2,3,4,5,6]);

//toString method
val = (5).toString();

//String to number
val = Number(5);

//Boolean to number
val = Number(false);

//Fasle == 0
//True == 1

//String text to number
val = Number('My name is Dary');
//NaN = Not A Number

//Array to number
val = Number([1, 2, 3, 4, 5, 6]);

//ParseInt
val = parseInt('50.50');

//ParseFloat
val = parseFloat('100.50');


console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));



