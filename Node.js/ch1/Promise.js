//프로미스

const condition = true;
const promise = new Promise((resolve, reject) => {
    //Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
    if(condition) {
        resolve('result');
    } else {
        reject('failure reason');
    }
});

promise
    .then((message) => {
        console.log(message);

    })
    .catch((error) => {
        console.error(error);
    });