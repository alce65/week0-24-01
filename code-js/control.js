const array = ['pepe', 'juan', 'luis'];

for (let i = 0; i < array.length; i++) {
  const iterator = array[i];
  if (iterator === 'juan') {
    continue;
  }
  console.log(iterator);
}

for (let i = 0; i < array.length; i++) {
  const iterator = array[i];
  if (iterator === 'juan') {
    break;
  }
  console.log(iterator);
}

let i = 0;
while (condition) {
  i++;
}

do {} while (condition);

for (const iterator of array) {
  console.log(iterator);
}

array.forEach((iterator, i) => {
  console.log(iterator);
  console.log(i);
});

const object = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in object) {
  const element = object[key];
}

if (condition) {
  // code
} else if (condition) {
  // code
} else {
  // code
}

switch (key) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    break;
}
