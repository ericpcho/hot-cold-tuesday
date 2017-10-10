import React from 'react';
import * as actions from '../actions';
import './top-nav.css';
import {connect} from 'react-redux';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.props.dispatch(actions.toggleInfoModal(e))}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    guesses: state.guesses,
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    showInfoModal: state.showInfoModal,
    totalGuesses: state.totalGuesses
});

export default connect(mapStateToProps)(TopNav);