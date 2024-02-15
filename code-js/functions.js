// Crear una función

// Declaración

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

const add = (a, b) => a + b;

const square = (a) => a * a;

const render = (value) => console.log(value);

// Uso de las funciones

greet();
greet2();
greet3();

// Parámetros y argumentos

// Parámetro = variable local a la función
// Argumento = valor que se pasa a la función

const multiplySquares = (a, b, ...c) => {
  if (a === undefined) {
    return 'first parameter is not defined';
  }
  if (b === undefined) {
    return 'second parameter is not defined';
  }
  if (c.length > 0) {
    return 'use only 2 arguments';
  }

  return a ** 2 * b ** 2;
};

render(multiplySquares()); // NaN
render(multiplySquares(3)); // NaN
render(multiplySquares(3, 4));
render(multiplySquares(3, 4, 5)); // use only 2 arguments

// Parámetros por defecto

{
  const foo = (a = 1, b = 2) => a + b;

  render(foo(undefined, 5)); // 3
}

// Scope de las variables

let text1 = 'Valor inicial';
let text2 = 'Valor inicial';

function foo() {
  let text1;
  let text2;
  text1 = 'Cambio desde dentro';
  text2 = 'Cambio desde dentro';
  return text1;
}

text1 = foo();
console.log(text1); // "Valor inicial"
console.log(text2); // "Cambio desde dentro

//  Argumentos primitives vs objects

{
  const changePrimitive = (value) => {
    value = 5;
    return value;
  };

  let value = 3;
  console.log(changePrimitive(value)); // 5
  console.log(value); //3
}

{
  const changeObject = (obj) => {
    obj.value = 5;
    return obj;
  };

  let obj = { value: 3 };
  console.log(changeObject(obj)); // { value: 5 }
  console.log(obj); //
}

{
  const changeObjectIM = (obj) => {
    obj = { ...obj };
    // Object.assign({}, obj);
    // JSON.parse(JSON.stringify(obj));
    // create a new object with the same properties

    obj.value = 5;
    return obj;
  };

  let obj = { value: 3 };
  console.log(changeObject(obj)); // { value: 5 }
  console.log(obj); // { value: 3 }
}

// Funciones como objetos

{
  const foo = function (z) {
    let x = z * 22;

    let obj = {};

    let bar = function (a, b) {
      return a + b;
    };

    let n = bar(1, 2) + x;

    return n;
  };

  console.log(foo(3)); // 67
  console.log(foo(4)); // 90

  foo.bar(1, 2); // error ;
}

{
  // Callbacks

  // Una función que recibe otra función como argumento
  // Higher order function
  const calcular = (a, b, operation) => {
    return operation(a, b);
  };

  calcular(2, 3, (a, b) => a + b);
  calcular(2, 3, (a, b) => a - b);
  calcular(2, 3, (a, b) => a * b);

  const sum = (a, b) => a + b;
  const rest = (a, b) => a - b;
  const multiply = (a, b) => a * b;

  calcular(2, 3, sum);
  calcular(2, 3, rest);
  calcular(2, 3, multiply);
}
