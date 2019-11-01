import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Matches from '../components/Matches/Matches';

class BracketCard extends Component {
    
    state = {
        url : this.props.match.params.tournament,
    }

    render() {
        return (
            <div className="mt-5">
                <Container fluid={true}>
                    <Matches matchName={this.state.url} />
                </Container>
            </div>
        )
    }
}

export default BracketCard;

