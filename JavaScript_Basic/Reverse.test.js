function reveres(array) {
 let newArray = [];

 for(let i = array.length - 1; i >= 0; i--) {
   newArray.push(array[i]);
 }

  return newArray;
}


test('reveres', () => {
  expect(reveres('array')).toEqual(["y","a","r","r","a"]);
})