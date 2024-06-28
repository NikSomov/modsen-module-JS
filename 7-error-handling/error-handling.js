//parameter
const obj = {
  name: 'John',
  age: 30
};
const property = 'name';

//func def
function getProperty(obj, property) {
  try {
    return obj[property];
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`error: property "${property}" do not exists.`);
    } else {
      throw error;
    }
  }
}

//func call
const result = getProperty(obj, property);
console.log(`Result: ${result}`);
