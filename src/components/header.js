import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import {connect} from 'react-redux';
import './header.css';

export class Header extends React.Component  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showInfoModal: false
    //     };
    // }

    // toggleInfoModal() {
    //     this.setState({
    //         showInfoModal: !this.state.showInfoModal
    //     });
    // }

    render() {
        let infoModal;
        if (this.props.showInfoModal) {
            infoModal = <InfoModal />;
        }

        return (
            <header>
                <TopNav onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
})

export default connect(mapStateToProps)(Header);