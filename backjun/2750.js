// Sort numbers(Ascending order)

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
const input = [5, 5, 2, 3, 4, 1];
const N = input.shift(); // .shift() : 배열의 맨 앞에 값을 제거한다.
const sorted = input.sort((a, b) => a - b); //.sort 베열의 요소를 적절하게 정렬 할 때 유용하다.

for (let i = 0; i < N; i++) {
    console.log(sorted[i]);
}

// For submit

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(num => parseInt(num));

// For local test
// const input = [5, 5, 2, 3, 4, 1];
// input.shift();
// const sorted = input.sort((a, b) => a - b);

// for (let num of sorted) {
// console.log(num);
// }