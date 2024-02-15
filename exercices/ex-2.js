// 1. Haz una arrow function que reciba n números y devuelva media aritmética.

// 5, 7, 9 , 4 --> Media: 5 + 7 + 9 + 4 / 4

const average = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
};

const average2 = (...numbers) => {
  let sum = 0;
  numbers.forEach((item) => {
    sum = sum + item;
  });
  return sum / numbers.length;
};

const average3 = (...numbers) => {
  let sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const r = average(5, 7, 9, 4, 9, 8, 4, 5, 6, 7, 8, 9, 10);
console.log(r);

// 2. Haz una arrow function que reciba n números y devuelva la suma de los cuadrados de esos números.

const sumSquares = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i] * numbers[i];
  }
  return sum;
};

const sumSquares2 = (...numbers) => {
  let sum = 0;
  numbers.forEach((item) => {
    sum = sum + item * item;
  });
  return sum;
};

const sumSquares3 = (...numbers) => {
  let sum = numbers.reduce((a, b) => a + b * b);
  return sum;
};

const r2 = sumSquares(2, 3, 2); // 2*2 + 3*3 + 2*2 = 4 + 9 + 4 = 17
console.log(r2);

// 3. Haz una arrow function que reciba n números y devuelva el mayor.

// 4. Haz una arrow function que reciba n números y devuelva el menor.

// 5. Haz una arrow function que reciba n números y devuelva el número que más se repite.
