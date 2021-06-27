const dog = {
    type: 'dog', 
    name: '츄츄',
    owner: {name: 'jihwooon'}
};

console.log('logging', dog);

//log Level
console.log('log'); //개발 - 출력
console.info('info'); // 정보
console.warn('warn'); //경보
console.error('error'); //에로! 예상하지 못한 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

//print object
console.log(dog);
console.table(dog);
console.dir(dog, {colors: false, depth: 0 });

//measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
let count = 0;
function a() {
    console.count('a function');

}

a();
a();
console.countReset('a function');
a();

//trace
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.trace();
    console.log('hi! :)');
}
f1();
