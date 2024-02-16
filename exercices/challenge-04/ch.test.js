import {
  removeFirstAndLast2,
  isPalindrome,
  isPalindrome2,
  countVowels,
  calculateAge,
  isAdult,
  isAdultPrecise,
  isAdultMorePrecise,
  rockPaperScissors,
  billCalculator,
  billRender,
} from './ch.js';

console.log('Expected: ell ->', removeFirstAndLast2('hello'));
console.log('Expected: "" ->', removeFirstAndLast2('he'));
console.log('Expected: "" ->', removeFirstAndLast2('h'));
console.log('Expected: "" ->', removeFirstAndLast2(''));

console.log('hello -> false', isPalindrome('hello'));
console.log('hello -> false', isPalindrome('Hello'));
console.log('arenera -> true', isPalindrome('arenera'));
console.log('Arenera -> true', isPalindrome('Arenera'));
console.log('arenerá -> true', isPalindrome2('arenerá'));

console.log('Expected: 2 ->', countVowels('hello'));
console.log('Expected: 2 ->', countVowels('hEllo'));
console.log('Expected: 5 ->', countVowels('murciélago'));

console.log('Expected: 33  ->', calculateAge(1991));
console.log('Expected: 124  ->', calculateAge(1900));

console.log('Expected: Mayor  ->', isAdult('1998-12-31'));
console.log('Expected: Menor  ->', isAdult('2007-10-30'));
console.log('Expected: Menor  ->', isAdultPrecise('2006-10-30'));

console.log('Expected: Mayor  ->', isAdultPrecise('2006-01-1'));
console.log('Expected: Mayor ->', isAdultPrecise('2006-02-15'));
console.log('Expected: Menor ?? sale Mayor ->', isAdultPrecise('2006-02-17'));

console.log('Expected: Mayor  ->', isAdultMorePrecise('2006-02-1'));
console.log('Expected: Mayor  ->', isAdultMorePrecise('2006-02-15'));
console.log('Expected: Menor  ->', isAdultMorePrecise('2006-02-17'));

console.log(rockPaperScissors('piedra'));
console.log(rockPaperScissors('papel'));
console.log(rockPaperScissors('tijera'));

console.log(billCalculator(1980, 12.5));
billRender(1980, 12.5);
