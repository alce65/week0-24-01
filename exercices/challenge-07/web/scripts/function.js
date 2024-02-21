import { DECKS } from './decks.js';

const takingCard = (cards) => {
  let randomCardIndex = Math.floor(Math.random() * cards.length);
  const randomCard = cards[randomCardIndex];
  return randomCard;
};

const solveRound = (userCard, CPU, option, userName) => {
  const messages = [
    `${userName} HAS GANADO, ha salido ${CPU.numero} de ${CPU.symbol}`,
    `${userName} HAS PERDIDO, ha salido ${CPU.numero} de ${CPU.symbol}`,
    `${userName} tiene que elegir si la siguiente carta es 'mayor' o 'menor'!`,
  ];

  let matchIncrement = 0;
  let scoreIncrement = 0;
  let message = '';
  switch (option) {
    case 'mayor':
      if (userCard.value < CPU.value) {
        message = messages[0];
        scoreIncrement++;
      } else {
        message = messages[1];
      }
      matchIncrement++;
      break;
    case 'menor':
      if (userCard.value > CPU.value) {
        message = messages[0];
        scoreIncrement++;
      } else {
        message = messages[1];
      }
      matchIncrement++;
      break;
    default:
      message = messages[2];
  }
  return {
    scoreIncrement,
    matchIncrement,
    message,
  };
};

export const createMatch = () => {
  let username = '';
  let deck = '';
  const onSubmitForm1 = (event) => {
    event.preventDefault();
    username = event.target.elements[0].value;
    username = username === ' ' ? 'Jugador' : username;
    deck = event.target.elements[1].value;
    console.log(username);
    console.log(deck);
    game(deck, username);
  };

  document.querySelector('.form1').addEventListener('submit', onSubmitForm1);
};

export const game = (deck, username) => {
  let cards = DECKS[deck];
  let score = 0;
  let match = 0;
  let openCard = '';
  let closeCard = '';

  const changeSection = (prev, next) => {
    sections[prev].setAttribute('hidden', true);
    sections[next].removeAttribute('hidden');
  };

  const createRound = () => {
    openCard = takingCard(cards);
    cards.splice(cards.indexOf(openCard), 1);
    document
      .querySelectorAll('.card')
      .forEach(
        (element) =>
          (element.innerHTML = `${openCard.numero} de ${openCard.symbol}`)
      );

    closeCard = takingCard(cards);
    cards.splice(cards.indexOf(closeCard), 1);
    console.log(openCard, closeCard);
    console.log(cards.length);
  };

  const onClickButton1 = () => {
    changeSection(1, 2);
    createRound();
  };

  const onClickButtonOptions = (event) => {
    const option = event.target.textContent.toLowerCase();
    const { message, matchIncrement, scoreIncrement } = solveRound(
      openCard,
      closeCard,
      option,
      username
    );
    score += scoreIncrement;
    match += matchIncrement;

    event.target.classList.contains('option-2')
      ? changeSection(4, 3)
      : changeSection(2, 3);

    document.querySelector('.message').innerHTML = message;
    document.querySelector(
      '.info'
    ).innerHTML = `De momento has jugado ${match} veces y ganado ${score} veces!`;
  };

  const onClickButtonNext = () => {
    if (cards.length !== 0) {
      changeSection(3, 4);
      createRound();
    } else {
      changeSection(3, 5);
      document.querySelector(
        '.final-score'
      ).innerHTML = `Has jugado ${match} vez y ganado ${score} vez!`;
      document.querySelector('.end-cards').removeAttribute('hidden');
    }
  };

  const onClickButtonEnd = () => {
    changeSection(3, 5);
    document.querySelector(
      '.final-score'
    ).innerHTML = `Has jugado ${match} vez y ganado ${score} vez!`;
  };

  const start = () => {
    sections[0].setAttribute('hidden', true);
    sections[1].removeAttribute('hidden');
    document
      .querySelectorAll('.username')
      .forEach((element) => (element.innerHTML = username));

    const deckElements = document.querySelectorAll('.deck');
    console.log(cards);
    if (cards.length === 40) {
      deckElements[0].setAttribute('hidden', true);
      deckElements[1].removeAttribute('hidden');
    }
  };

  const sections = document.querySelectorAll('section');

  document.querySelector('.button1').addEventListener('click', onClickButton1);
  document
    .querySelectorAll('.button-option')
    .forEach((element) =>
      element.addEventListener('click', onClickButtonOptions)
    );
  document
    .querySelector('.button-next')
    .addEventListener('click', onClickButtonNext);
  document
    .querySelector('.button-end')
    .addEventListener('click', onClickButtonEnd);

  start();
};
