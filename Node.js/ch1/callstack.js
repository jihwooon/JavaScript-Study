/*---------------------------콜스택---------------------------*/
function first() {
    second();
    console.log("첫 번째");
}
function second() {
    third();
    console.log("두 번째");
}

function third() {
    console.log("세 번째");

}
first();

/*---------------------------비동기식 콜스택---------------------------*/

// function run() {
//     console.log('3초 후 실행');

// }
// console.log('시작');
// setTimeout(run,300);
// console.log('끝');


/*----------------------실행 컨텍스트와 콜 스택--------------------------*/
// var a = 1;
// function outer() {
//     function inner() {
//         console.log(a);
//          var a = 3;
//     }
//     inner();
//     console.log(a);
// }
// outer();
// console.log(a);

/* -------------------- */

function foo() {
	console.log('foo');
}
function bar() {
	console.log('bar');
}

setTimeout(foo, 3); 
bar();