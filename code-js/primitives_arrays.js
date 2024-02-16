const str = 'Hello, World!';

console.log(str.toLocaleLowerCase());
// str.x = 10; // TypeError: Cannot create property 'x' on string 'Hello, World!'

const arr = [12, 78, 45, 38, 56, 3, 34];
const x = arr.push(65);

console.log(arr);
console.log(x);

const y = arr.slice(3, 5);
console.log(y);
console.log(arr);

const arrOld = [...arr];
arr.sort((a, b) => a - b);
console.log(arr);
console.log(arrOld);

const foo = (num = 0, letter = '', ...r) => {
  const result = '';

  return result;
};
