// function add(x, y) {
//   //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
//   //즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
//   console.log(x, y);
//   return x + y; //리턴 못 받음
// }
// add(2,5);
//
// //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
// // console.log(x,y); //ReferenceError: x is not defined
//
// function test(y,z) {
//
//   console.log(y,z);
// }
//
// test(5,6);
//
//
// var count = 0;
// var timer = setInterval(function () {
// 	console.log(count);
// 	if(++count > 4) clearInterval(timer);
// }, 300);
//

/*실행 컨텍스트와 콜 스택*/
var a = 1;
var outer = function () {
    var inner = function () {
        console.log(a);
        var a = 3;

    };
    inner();
    console.log(a);
};
outer();
console.log(a);