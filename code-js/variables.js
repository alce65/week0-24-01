// var x

// Declarar (e inicializando) una variable
let y;
const z = 3.14;

console.log(y, typeof y);

// Reasignar una variable
y = 3;
// No se puede reasignar una constante
// z = 3.14; // Error

const a = {
  name: 'Pepe',
  age: 25,
};

a.name = 'Juan';
a.age = 30;

// No se puede reasignar una constante
// a = { name: 'Juan', age: 30 }; // Error

console.log(a);

// Tipado débil y dinámico

let b = 3;
console.log(b, typeof b);
b = 'Hola';
console.log(b, typeof b);
b = true;
console.log(b, typeof b);
b = null;
console.log(b, typeof b);
b = undefined;
console.log(b, typeof b);
b = {};
console.log(b, typeof b);
b = [];
console.log(b, typeof b);

// Letter Cases

// camelCase
// PascalCase - Clases, Interfaces, Types, Constructors
// kebab-case - HTML, CSS
// snake_case - Python

{
  let undefined = 22;
  console.log(undefined);
  let NaN = 43;
}

let zz = 67;
let isLogged = true;
isLogged = false;

const user = {
  name: 'Pepe',
  age: 25,
};

user.age = 26;
user.name = 'Jose';
user.isLogged = true;

delete user.age;

console.log(user);

Object.freeze(user);

function add(a, b) {
  return a + b;
}

// user.age = 27; // No se puede modificar

let foo = 7;
foo = 3 + 4;
foo = add(3, 4);

{
  let x = 22; // Expresión literal: vale 'literalmente' lo que dice
  x = 20 + 5; // Expresión aritmética
  let z = x * 2; // Expresión aritmética que incluye una variable
  // Usando el valor de la variable,
  // se evalúa al valor resultante (50)
  let foo = x === z;
  console.log(foo);
}

// Template literals

let userName = 'Pepe';
let age = 25;
let messageOld = 'Hola, me llamo ' + userName + ' \n y tengo ' + age + ' años';
let message = `Hola, me llamo ${userName} 
y tengo ${age} años`;

console.log(messageOld);
console.log(message);

console.log(Number.MAX_VALUE); // 1.7976931348623157e308;
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE * 2); // Infinity
console.log(-Number.MAX_VALUE * 2); // -Infinity

console.log(4 / 0); // Infinity
console.log(0 / 5); // 0
console.log(0 / 0); // NaN
console.log(0 / -5);

console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
console.log(Number.MIN_SAFE_INTEGER); // -9_007_199_254_740_991
console.log(9_007_199_254_740_991 + 2);

console.log(9_007_199_254_740_991n + 2n);

// Casting

console.log(3 + 4 + '5');
console.log(3 + 4 + Number('5'));

// 1- 3 + 4 = 7
// 2- 7 + '5' = '75'

console.log('Pepe' / 33);
console.log(22 / 4);

// Truty values

let x;
x = 22;
x = {};
x = [];
x = 'Pepe';
if (x) {
  console.log('x es true');
}

// Falsy values

x = 0;
x = -0;
x = 0n;
x = -0n;
x = '';
x = null;
x = undefined;
x = NaN;
if (!x) {
  console.log('x es false');
}

// Objetos

const user1 = {
  age: 25,
  name: 'Ernestina',
  isLogged: true,
  address: {
    street: 'Calle Mayor',
    number: 7,
  },
  friends: ['Juan', 'Luis'],
};

// console.log(algoNuevo); // Error: ReferenceError
console.log(user1.algoNuevo);

console.log(user1.name);

let property = 'name';

console.log(user1.property); // undefined
console.log(user1[property]); // Ernestina
console.log(user1['name']);

const names = ['Pepe', 'Juan', 'Luis'];
const peoples = [{ name: 'Pepe' }, { name: 'Juan' }, { name: 'Luis' }];

console.log(names[0]);
console.log(names[100]);
