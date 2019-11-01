import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Twitch from "../components/Twitch";
import GameInfo from "../components/GameInfo/GameInfo";

class Game extends Component {
    
    state = {
        url : this.props.match.params.game,
    }

    render() {
        return (
            <div className="mt-5">
                <Container fluid={true}>
                    <Twitch gameName={this.state.url} />
                    <GameInfo gameName={this.state.url} />
                </Container>
            </div>
        )
    }
}

export default Game;