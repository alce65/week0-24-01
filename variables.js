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
