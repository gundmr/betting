import React from "react";
import Modal from "./Modal";

class BetButton extends React.Component {
    state = {
        showModal: false
    }

    toggleModal = () => this.setState({
        showModal: !this.state.showModal
    })

    render() {
        return (
            <div
                className={`container ${this.state.showModal ? 'modal-open' : ''}`}>
                <button
                    className="btn btn-primary"
                    onClick={
                        this.toggleModal
                    }
                >Bet Now
          </button>
                <Modal
                    toggle={this.toggleModal}
                    showModal={this.state.showModal}
                />
            </div>
        );
    }
}

export default BetButton;