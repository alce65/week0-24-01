export const randomPassword = (passLength) => {
  if (passLength < 6) {
    return 'Password must be at least 6 characters';
  }

  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const characters = lowerCase + upperCase + numbers;

  let password = '';
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];

  for (let i = 3; i < passLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  return password;
};

const calculateMedian = (arr) => {
  // arr.sort((a, b) => a - b)
  const sortArray = arr.toSorted((a, b) => a - b);
  const middle = Math.floor(sortArray.length / 2);
  return sortArray.length % 2 === 0
    ? (sortArray[middle - 1] + sortArray[middle]) / 2
    : sortArray[middle];
};

const calculateMode = (arr) => {
  const mode = {};
  let max = 0;
  let result = [];

  arr.forEach((item) => {
    if (mode[item]) {
      mode[item] += 1;
    } else {
      mode[item] = 1;
    }

    if (mode[item] > max) {
      max = mode[item];
      result = [item];
    } else if (mode[item] === max) {
      result.push(item);
    }
  });

  return result;
};

// Crea una función que sume todos los números de un array y
// devuelva también la media, mediana, moda y la suma total.

export const makeStatistics = (arr = []) => {
  const totalSum = 0;
  arr.forEach((item) => (totalSum += item));
  const mean = totalSum / arr.length;
  const median = calculateMedian(arr);
  const mode = calculateMode(arr);

  // return {
  //   totalSum : totalSum,
  //   mean : mean,
  // };

  return {
    totalSum,
    mean,
    median,
    mode,
  };
};

1, 3, 4, 5;
