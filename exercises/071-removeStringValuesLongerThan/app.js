function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (const prop in obj) {
    if (typeof obj[prop] === 'string' && obj[prop].length > num) {
      delete obj[prop]
    }
  }
  return obj
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
