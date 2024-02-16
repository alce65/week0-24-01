// 1. Crea una función que elimine el primer y último carácter de un string recibido por parámetros.

export function removeFirstAndLast(inputString) {
  let inputArray = inputString.split('');
  inputArray.pop();
  inputArray.shift();
  const newString = inputArray.join('');
  return newString;
}

export function removeFirstAndLast2(inputString) {
  const newString = inputString.slice(1, -1);
  return newString;
}

// 2. Escribe una función que reciba una palabra y revise si es un palíndromo.

const removeAccents = (str) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'á' || arr[i] === 'à' || arr[i] === 'ä') {
      arr[i] = 'a';
    }
    if (arr[i] === 'é' || arr[i] === 'è' || arr[i] === 'ë') {
      arr[i] = 'e';
    }
    if (arr[i] === 'í' || arr[i] === 'ì' || arr[i] === 'ï') {
      arr[i] = 'i';
    }
    if (arr[i] === 'ó' || arr[i] === 'ò' || arr[i] === 'ö') {
      arr[i] = 'o';
    }
    if (arr[i] === 'ú' || arr[i] === 'ù' || arr[i] === 'ü') {
      arr[i] = 'u';
    }
  }
  return arr.join('');
  // return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const isPalindrome = (inputWord) => {
  // const lowerWord = inputWord.toLowerCase();
  const reversedStr = inputWord.split('').reverse('').join('');
  return inputWord.toLowerCase() === reversedStr.toLowerCase();
};

export const isPalindrome2 = (inputWord) => {
  // inputWord = inputWord.toLowerCase();
  const lowerInputWord = removeAccents(inputWord).toLowerCase();
  const reversedStr = lowerInputWord.split('').reverse('').join('');
  return lowerInputWord === reversedStr;
};

// 3. Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

export const countVowels = (inputWord) => {
  const lowerWord = inputWord.toLowerCase();
  const vowels = [
    'a',
    'e',
    'i',
    'o',
    'u',
    'á',
    'é',
    'í',
    'ó',
    'ú',
    'à',
    'è',
    'ì',
    'ò',
    'ù',
    'ä',
    'ë',
    'ï',
    'ö',
    'ü',
  ];
  let counter = 0;
  for (let i = 0; i < lowerWord.length; i++) {
    if (vowels.includes(lowerWord[i])) {
      counter++;
    }
  }
  return counter;
};

// 4. Crea una función que verifique si una cadena de texto recibida por parámetros
// es un pangrama (contiene todas las letras del abecedario).

export const isPangram = (inputString) => {
  const lowerString = inputString.toLowerCase();
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerString.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
};

// 7. Escribe una función que reciba por
// parámetros el año de nacimiento, y calcule la edad de la persona.

export const calculateAge = (year) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
};

//8. Crea una función que reciba la fecha de nacimiento de una persona por parámetros
// y verifique si es mayor de edad.
// Imprime por consola un string con el resultado.

export const isAdult = (dateIso) => {
  const birthDate = new Date(dateIso);
  const now = new Date();
  const currentYear = now.getFullYear();
  const age = currentYear - birthDate.getFullYear();
  if (age >= 18) {
    return 'Es Mayor de edad';
  }
  return 'Es menor de edad';
};

export const isAdultPrecise = (dateIso) => {
  const birthDate = new Date(dateIso);
  const now = new Date();
  const time = now - birthDate;
  const age = time / 1000 / 60 / 60 / 24 / 365;
  if (age >= 18) {
    return 'Es Mayor de edad';
  }
  return 'Es menor de edad';
};

export function isAdultMorePrecise(fechaNacimiento) {
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  const mes = hoy.getMonth() - fechaNac.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
  }

  if (edad >= 18) {
    return 'Es Mayor de edad';
  }
  return 'Es menor de edad';
}

// 9.  Crea una función que simule el lanzamiento de un dado
// e imprime por consola el resultado cada vez que se ejecuta.

// 1 - 6
// Math.random() * 6 -> 0 - 5

export const rollDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
};

// 11. Escribe una función que simula el juego piedra, papel y tijera.
// Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string.
// La máquina, elegirá automáticamente una opción aleatoria.
// Imprime por consola ambas elecciones
// y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

export const rockPaperScissors = (playerChoice) => {
  const options = ['piedra', 'papel', 'tijera'];
  const myChoice = options[Math.trunc(Math.random() * 3)];

  const play = {
    user: playerChoice,
    machine: myChoice,
  };

  if (playerChoice === myChoice) {
    play.result = 'Empate';
  } else if (
    (playerChoice === 'piedra' && myChoice === 'tijera') ||
    (playerChoice === 'papel' && myChoice === 'piedra') ||
    (playerChoice === 'tijera' && myChoice === 'papel')
  ) {
    play.result = 'Ganaste';
  } else {
    play.result = 'Perdiste';
  }
  return play;
};

// 13.  Crea una función calculadora de propinas.
// Debe recibir el total de la cuenta y el porcentaje de propina deseado,
// con ello deberá calcular y devolver
// - la cuenta,
// - la propina que corresponde a la cuenta introducida,
// - y el total a pagar. Redondea a dos decimales..

export const billCalculator = (total, percentage) => {
  const tip = total * (percentage / 100);
  const totalToPay = total + tip;
  return {
    total: Math.round(total * 100) / 100,
    tip: Math.round(tip * 100) / 100,
    totalToPay: Math.round(totalToPay * 100) / 100,
  };
};

export const billRender = (total, percentage) => {
  const data = billCalculator(total, percentage);
  const formateadData = `
  Total: ${data.total.toFixed(2)}
  Propina: ${data.tip.toFixed(2)}
  --------------------------------
  Total a pagar: ${data.totalToPay.toFixed(2)}
  `;
  console.log(formateadData);
};
