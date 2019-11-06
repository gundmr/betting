import React from "react";
import Modal from "./Modal/Modal.js";



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
                <button className="btn btn-warning" style={{ background: '#CFB53B', borderWidth: '2px', borderColor: '#CFB53B',  color: 'white' }}
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