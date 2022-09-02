/* 객체 리터럴*/

let user = {
   name : 'Mike',
   age : 30,
}

/* 생성자 함수   */

function User(name, age) {
  this.name = name;
  console.log(name);
  this.age = age;
  console.log(age);
}

let user1 = new User('Mike', 30);
let user2 = new User('Jane', 22);
let user3 = new User('Tom', 17);

function User2(name, age) {
   this.name = name;
   this.age = age;
   this.sayName = function(){
       console.log(this.name);
   }
}

let user5 = new User2('Han', 40);
user5.sayName();

// 생성자 함수 : 상품 객체를 생성해보자.

function Item(title, price) {
   this.title = title;
   this.price = price;

}
console.log(Item);

let item1  = new Item('아이폰', 1000);
console.log(item1);