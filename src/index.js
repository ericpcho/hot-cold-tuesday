import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import * as actions from './actions'; // import our actions
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
    <Game />
    </Provider>,
    document.getElementById('root')
);



// console.log(store.getState());
// store.dispatch(actions.guess(10))
// console.log(store.getState());
// store.dispatch(actions.newGame())
// console.log(store.getState());
// store.dispatch(actions.toggleInfoModal())
// console.log(store.getState())