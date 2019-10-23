import React from "react";

class Modal extends React.Component {
    componentDidMount() {
    }

    dismissModal = () => {
        this.props.toggle()
    }

    render() {
        return (
            <div
                onClick={this.dismissModal}
                className={`modal fade BettingModal ${this.props.showModal ? 'show' : ''}`}
                style={{
                    display: `${this.props.showModal ? 'block' : 'none'}`,
                }}
                id="BettingModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="camera-box">
                                <img alt="" src="/img/yellow-logo.svg" />
                                <h5 className="modal-title" id="ModalLabel">Ladies & Gentlemen, Place Your Bets!</h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">
                                In increments of 100 credits, please place your bet...Good luck, Gamer!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;