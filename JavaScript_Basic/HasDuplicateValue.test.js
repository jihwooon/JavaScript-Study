function hasDuplicateValue(array) {

  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(i !== j && array[i] === array[j]) {
        return true;
      }
    }
  }
  return false;
}


test('hasDuplicateValue', () => {
  expect(hasDuplicateValue('abc')).toEqual(false);
  expect(hasDuplicateValue('abbc')).toEqual(true);
})

function hasDuplicateValue1(array) {

  let existingValues = {};
  for (let i = 0; i < array.length; i++) {
    if(!existingValues[array[i]]) {
      existingValues[array[i]] = true;
    } else {
      return false;
    }
  }

  return false;
}

test('hasDuplicateValue1', () => {
  expect(hasDuplicateValue1('abbcd')).toEqual(true);
  expect(hasDuplicateValue1('abcd')).toEqual(false);
})