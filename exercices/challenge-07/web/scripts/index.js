import { createMatch, game } from './function.js';

createMatch();

document.addEventListener('gameReady', (event) => {
  const { username, deck } = event.detail;
  game(deck, username);
});
