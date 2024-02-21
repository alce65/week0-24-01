import { createMatch, game } from './function.js';

createMatch();

document.dispatchEvent(
  new CustomEvent('startGame', { detail: { a: 12, b: 12 } })
);

document.addEventListener('startGame', (event) => {
  console.log('Event', event);
});
