import { strictEquals } from './helpers.js';

console.log('Testing 1 v. 1: expected true', strictEquals(1, 1));
console.log('false --> Rule', strictEquals(NaN, NaN));
console.log('true --> Rule', strictEquals(0, -0));
console.log('true --> Rule', strictEquals(-0, 0));
console.log('false', strictEquals(1, '1'));
console.log('false', strictEquals(true, false));
console.log('true', strictEquals(false, false));
console.log('false', strictEquals('water', 'oil'));
