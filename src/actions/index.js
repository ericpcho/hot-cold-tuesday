//actions

export const NEW_GAME = 'NEW_GAME';
// return initial state
export const newGame = () => ({
  type: NEW_GAME,

});

export const GUESS = 'GUESS';
// return new state with guess
export const guess = (guess) => ({
  type: GUESS,
  guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
// return new state with the opposite value for info modal
export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL
});

