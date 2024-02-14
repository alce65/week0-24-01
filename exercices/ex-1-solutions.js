const render = (x) => {
  console.log(x);
};

// 1. Imprime por consola el string 'Hello World'.
console.log('Hello World');

// 2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.

// 3. Cambia ahora el valor de una de las dos variables e imprime por consola.

// 4. Crea dos variable numéricas e imprime el resultado de sumarlas por consola.

// 5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.

// 6. Crea una función que imprima por consola el string 'Hello World'.

// Declaración de función
function greet() {
  console.log('Hello World');
}

// Asignación de una expresión de función
const greet2 = function () {
  // Function expression
  console.log('Hello World');
};

const greet3 = () => {
  // Arrow function
  console.log('Hello World');
};

greet();
greet2();
greet3();

// 7. Crea una función que devuelva el resultado de la multiplicación
// de dos números introducidos como parámetros
// y muestra el resultado por consola.

// function multiply(a, b) {
//   console.log(a * b);
// }

// Expresión de función

// parámetros a y b
const multiply = (a = 1, b = 1) => {
  // let a
  // let b
  const result = a * b;
  // console.log(result);
  return result;
};

// Llamada a la función con argumentos 3 y 4
console.log(multiply(3, 4));

// 8. Crea una función que calcule el cubo de un número dado como parámetro
// y muestra por consola el resultado.

const cube = (a) => {
  // Math.pow(a, 3);
  const result = a ** 3;
  return result;
};

const square = (a) => {
  return a ** 2;
};

console.log(cube(33));
render(cube(3));
render(cube(4));
render(square(3));

// 9. Crea una función que devuelva el área de un rectángulo de dimensiones dadas como parámetro.
// Y muestre por consola el resultado.

const rectangleArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(rectangleArea(3, 4));

// 10. Crea una función que devuelva un número aleatorio entre 0 y 10.
// Y muestra por consola el resultado.

const random = () => {
  const n = Math.random(); // Número pseudo-aleatorio entre 0 y 1
  const result = Math.trunc(n * 11); // Número pseudo-aleatorio entre 0 y 10
  return result;
};

for (let i = 0; i < 10; i++) {
  console.log(random());
}

// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10.
// Después, pregunte al usuario a través de un prompt un número del 1 al 10.
// Una vez recibida la respuesta, compare estos dos números.
// Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

// const app = () => {
//   const randomNumber = Math.trunc(Math.random() * 10) + 1;
//   const userNumber = prompt('Introduce un número del 1 al 10');

//   if (randomNumber === userNumber) {
//     console.log('Has acertado');
//   } else {
//     console.log(`Has fallado. El número correcto era ${randomNumber}`);
//   }
//   prompt('Introduce un número del 1 al 10');
// }

// app();

// 12. Crea una función que reciba un número como parámetro y devuelva si el número es par o impar.
// Y muestra por consola el resultado.

// isEven(); // : boolean
// isOdd(); // : boolean
//checkEvenOrOdd(3); // : string (Odd | Even)

const isEven = (n) => {
  // par = true, impar = false
  return n % 2 === 0;
};

// A ? B : C
// if (A) {
//   B;
// } else {
//   C;
// }

const checkEvenOrOdd = (n) => {
  const result = isEven(n) ? 'Even (Par)' : 'Odd (Impar)';
  return result;
};

console.log(checkEvenOrOdd(3));

// 13. Crea una función que reciba un parámetro de tipo string y devuelva el string revertido.
// Y muestra por consola el resultado. (ejemplo: 'casa' => 'asac).

const reverse = (s) => {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    result = s[i] + result;
  }
  return result;

  //  return s.split('').reverse().join('');
};

console.log(reverse('mi casa'));

// 14. Crea una función que devuelva la tabla de multiplicar de un número introducido como parámetro.
// LLama a la función desde console.log() para que el resultado se imprima por consola

const multiplicationTable = (n) => {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${n} * ${i} = ${n * i}\n`;
  }
  return result;
};

console.log(multiplicationTable(8));

// 15. Crea una función que reciba un número por parámetros y
// retorne si el número recibido es un número primo.
// LLama a la función desde console.log() para que el resultado se imprima por consola

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
};

const checkIsPrimeOrNot = (n) => {
  return isPrime(n) ? `${n} es primo` : `${n} no es primo`;
};

console.log(checkIsPrimeOrNot(3));
console.log(checkIsPrimeOrNot(4));

// 16. Crea una función que reciba un número como parámetro y devuelva el factorial de ese número.
// LLama a la función desde console.log() para que el resultado se imprima por consola

// Factorial de cualquier número entero y positivo n,
// es el producto de todos los números enteros positivos desde 1 hasta n.

// 0! = 1
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

const factorial = (n) => {
  if (n < 0) {
    // Si el número es negativo
    return 'No se puede calcular el factorial de un número negativo';
  }
  if (Math.trunc(n) !== n) {
    // Si el número es decimal
    return 'No se puede calcular el factorial de un número decimal';
  }
  if (n > 170) {
    // Si el número es mayor que 170
    return 'No se puede calcular el factorial de un número tan grande';
  }

  let result = 1;
  // for (let i = 1; i <= n; i++) {
  //   result = result * i;
  // }
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
};

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(171));
console.log(factorial(-2));
console.log(factorial(1.5));
console.log(factorial(-1.5));
