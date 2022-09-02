function maksUpperCase(array) {
   let newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray[i] = array[i].toUpperCase();
  }

  return newArray;
}

test('maksUpperCase', () => {
  expect(maksUpperCase(["tuvi", "leah", "shaya"])).toEqual(["TUVI", "LEAH", "SHAYA"]);
})


function maksUpperCase1(array) {

  for(let i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }

  return array;
}

test('maksUpperCase1', () => {
  expect(maksUpperCase1(["tuvi", "leah", "shaya"])).toEqual(["TUVI", "LEAH", "SHAYA"]);
})


/*
     버전                 시간 복잡도            공간 복잡도
* maksUpperCase           O(N)                O(N)
* maksUpperCase1          O(N)                O(1)
* */