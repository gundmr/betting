import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Matches from '../components/Matches/Matches';

class BracketCard extends Component {
    
    state = {
        url : this.props.match.params.tournament,
    }

    render() {
        return (
            <div className="mt-5">
                <Container fluid={true}>
                    <Row className="justify-content-center p-3">
                        <p>Welcome to Big Bets</p>
                    </Row>
                    <Matches matchName={this.state.url} />
                </Container>
            </div>
        )
    }
}

export default BracketCard;

