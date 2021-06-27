function add(x, y) {
  //매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  //즉, 매개변수의 스코프(유효범위)는 함수 몸체 내부다.
  console.log(x, y); 
  return x + y; //리턴 못 받음
}
add(2,5);

//매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x,y); //ReferenceError: x is not defined