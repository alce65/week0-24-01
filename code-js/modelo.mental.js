let str = 'Hello';
console.log(str[0]);

// str[0] = 'j';
str = 'jello';
console.log(str);

const arr = [1, 2, 3, 'hello'];

// Error arr[3][0] = 'H';

const obj = {};
obj.name = 'Pepe';
console.log(obj);

const arr2 = [1, 2, 3];
arr2.x = 23;
console.log(arr2);
console.log(arr2.x);
console.log(arr2[0]);
console.log(arr2.length);

const make = () => {};
make.user = 'Pepe';
console.log(make);

const userStr = 'Pepe';

console.log(userStr.length);
console.log(userStr.toUpperCase);

function double(x) {
  x = x * 2;
  return x;
}

let money = 10;
double(money);
console.log(money);

{
  function double(x) {
    x = { ...x };

    x.value = x.value * 2;
    return x;
  }

  let money = { value: 10 };
  double(money);
  console.log(typeof money);
}

const a = true;
// a.x = 23; // Error: TypeError

!!'Pepe'; // true
Boolean('Pepe'); // true

const foo = () => {
  return 23;
};

const bar = foo;

bar(); // 23
foo(); // 23

{
  const foo = () => {
    return 23;
  };

  const bar = foo();

  // bar(); // Error: bar is not a function

  foo(); // 23
}

isNaN('Pepe'); // true
isNaN('23'); // false

Number.isNaN('Pepe'); // false
console.log(Number.isNaN(0 / 0)); //
