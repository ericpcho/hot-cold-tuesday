import React from 'react';
import * as actions from '../actions';
import './top-nav.css';
import {connect} from 'react-redux';

export class TopNav extends React.Component {
    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={() => this.props.dispatch(actions.toggleInfoModal())}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={() => this.props.dispatch(actions.newGame())}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);