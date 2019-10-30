import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Matches from '../components/Matches/Matches';

function BracketCard() {
    return (
        <div className="mt-5">
            <Container fluid={true}>
                <Row className="justify-content-center p-3">
                    <p>Welcome to Big Bets</p>
                </Row>
                <Matches />
            </Container>
        </div>
    );
}

export default BracketCard;

