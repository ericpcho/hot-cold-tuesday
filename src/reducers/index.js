// reducers

import * as actions from '../actions'; // import our actions

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false,
  totalGuesses: 0
};

export default (state = initialState, action) => {
  if (action.type === actions.NEW_GAME ) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    })
  } 
  else if (action.type === actions.GUESS ) {

    let guess = parseInt(action.guess, 10);
    let feedback;
    const difference = Math.abs(guess - state.correctAnswer);

    if (isNaN(guess)) {
        feedback = 'Please enter a valid number'
    }
    else if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }

    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess], 
      feedback,
      totalGuesses: state.totalGuesses + 1
    })
  }
  else if (action.type === actions.TOGGLE_INFO_MODAL) {
    console.log('Toggled!')
    return Object.assign({}, state, {showInfoModal: !state.showInfoModal})
  }
  return state;
}
