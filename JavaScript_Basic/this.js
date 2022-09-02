const mike = {
    name: "Mike",

};

const tom = {
    name: "Tom",

};

function showThisName() {
    console.log(this.name);

}

showThisName();
//this 중 call 불러오기
showThisName.call(mike);
showThisName.call(tom);

function update(birthYear, occuption) {
    this.birthYear = birthYear;
    this.occuption = occuption;

}

// update.call(mike, 1999, "singer");
// console.log(mike);
//
// update.call(tom, 2002, "singer");
// console.log(tom);

/*
* apply
* apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다.
* call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.
*
* */

update.apply(mike, [1999, "singer"]);
console.log(mike);

update.apply(tom, [2002, "singer"]);
console.log(tom);


const nums = [3, 10, 1, 6, 4];
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

const minNum = Math.min.apply(null,nums);
const maxNum = Math.max.apply(null,nums);

console.log(minNum);
console.log(maxNum);


/*bind
* 함수의 this값을 영구히 바꿀 수 있습니다.
* */

const jihwooon = {
    name : "jihwooon",

};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    console.log(birthYear);
    this.occuption = occupation;
    console.log(occupation);
}

const updateMike = update.bind(jihwooon);

update(1980,"police");
console.log(jihwooon);


const user = {
    name: "aaa",
    showName: function () {
        console.log(`hello, ${this.name}`);

    },
};
user.showName();

let fn = user.showName;

fn.call(user);
fn.bind(user);

let boundFn = fn.bind(user);

boundFn();


const apple = {
    product: "airpod",


};
const microsoft = {
    product: "surface",

};

function showThisproduct() {
    console.log(this.product);
};

showThisproduct(); // undefined
showThisproduct.call(apple); //airpod
showThisproduct.call(microsoft); //surface


var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;

};

var choco = new Cat('초코', 7);
console.log(choco);