// reducers

import * as actions from './actions'; // import our actions

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

export default (state = initialState, action) => {
  if (action === actions.NEW_GAME ) {
    return initialState;
  } else if (action === actions.GUESS ) {
    // say what to do with actions.value
    // push actions.value onto state.guesses
  }

  return state;
}