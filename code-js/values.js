// Valores primitivos
console.log(true, typeof true);
console.log(false, typeof false);
console.log(1, typeof 1);
console.log(-4, typeof -4);
console.log(0, typeof 0);
console.log(3.14, typeof 3.14);
console.log(NaN, typeof NaN);
console.log('Hola', typeof 'Hola');
console.log('Adios', typeof 'Adios');
console.log(`Hasta luego`, typeof `Hasta luego`);
console.log('645324234', typeof `Hasta mañana`);
console.log(undefined, typeof undefined);
/////
console.log(null, typeof null, 'debería ser null');
// Error de typeOf
////
console.log(1n, typeof 1n);
console.log(Symbol('lo que sea'), typeof Symbol('lo que sea'));
// Valores compuestos, referenciados u objetos
console.log({ name: 'John', age: 30 }, typeof { name: 'John', age: 30 });
console.log([1, 2, 3, 4, 5], typeof [1, 2, 3, 4, 5]);
console.log(new Date(), typeof new Date());
console.log(new Error('Ooops!'), typeof new Error('Ooops!'));
console.log(/ab+c/, typeof /ab+c/);

// Valores especiales = funciones
console.log(function () {}, typeof function () {});
