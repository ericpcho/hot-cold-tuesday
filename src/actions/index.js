//actions
'use strict';

const NEW_GAME = 'NEW_GAME';
// return initial state
const newGame = () => ({
  type: NEW_GAME,
});

const GUESS = 'GUESS';
// return initial state
const guess = (value) => ({
  type: GUESS,
  value
});