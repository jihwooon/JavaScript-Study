//1. Use strict
//added in ES 5
//use this for Valina Javascript.
'use strict';

//2. Variable
//let (added in ES6) 변수는 이것만 let 써야 한다.
let globalName = 'global name';
{
    let name = 'ellie'; // 
    console.log(name);

    name = 'hello'; 
    console.log(name);
    console.log(globalName);
}
console.log(name); // 블록 스코프 밖에서는 출력이 되지 않는다.
console.log(globalName);

//var (don't ever use this!) var는 절대 써서는 안된다.
//var hoisting (move declaration from bottom to top): 호이스팅은 어디서는 선언한것 상관없 이 항상 제일 위로 끌어 올려주는 것을 말합니다.
// has no block scope : 블록 스코프를 철저히 무시한다.
{
    age = 4;
    var age;

}
console.log(age);

// console.log(age);
// age = 4;
// console.log(age);
// var age;

//3. Constants : 상수 : 변경사항이 없을 때 const를 사용합니다.
//favor immutable data type alwats for a few reasons:
// - security
// - thread safety
// - reudce human mistakes 
const daysInWeek = 7;
const maxNumber = 5;


// 4. variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class function

let a = 12;
console.log(a);
let b = 1.2;
console.log(b);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `h1 ${brendan}!`; //template literals (string) 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//booean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// console.log(symbol1 === Symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof sym}`)

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 30; 
console.log(ellie);

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1 ;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
