// Declaración de funciones

function sum(a, b) {
  return a + b;
}

// Asignación de expresiones funcionales a variables

const sum2 = function (a, b) {
  return a + b;
};

// Asignación de expresiones funcionales arrow a variables

const sum3 = (a, b) => {
  return a + b;
};

// Ejecutar (invocar) funciones

const sumSquared = (a, b) => {
  a = a * a;
  b = b * b;
  return a + b;
};

sum(1, 2); // 3
sum2(15, 20); // 35

// Parámetros -> variables locales a la función
// Argumentos -> valores que se pasan a la función al invocarla

let a = 12;
let b = 15;
sum(a, b); // 27
debugger;
sumSquared(a, b); // 729

console.log(a); // 12

// Parámetros tipo objetos

const birthDay = (person) => {
  person = { ...person };
  person.age++;
};

const user = {
  name: 'Pepe',
  age: 25,
};
birthDay(user);
console.log(user.age); // 26
