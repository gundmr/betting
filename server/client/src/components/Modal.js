import React from "react";

class Modal extends React.Component {

    render() {
        return (
            <div
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
                        <div className="modal-body col-sm-6">
                            <form class="form-inline">
                                <label class="my-1 mr-2" for="inlineFormCustomSelectPref"></label>
                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option selected>Choose Tournament</option>
                                    <option value="1">LeagueofLegends1</option>
                                    <option value="2">LeagueofLegends2</option>
                                    <option value="3">LeagueofLegends3</option>
                                    <option value="3">LeagueofLegends4</option>
                                    <option value="3">LeagueofLegends5</option>
                                    <option value="3">LeagueofLegends6</option>
                                    <option value="3">LeagueofLegends7</option>
                                    <option value="3">LeagueofLegends8</option>
                                </select>
                            </form>

                            <p className="text-center">
                                Type in your wager below:
                            </p>

                            <div class="input-group mb-3 col-sm-12">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            </div>

                            <p className="text-center">
                                Good Luck Gamer!
                            </p>

                            <button class="btn btn-warning" onClick={this.props.toggle}>Place Bet</button>
                            <button class="btn btn-dark" onClick={this.props.toggle}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;