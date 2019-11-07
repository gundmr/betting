import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Matches from '../../components/Matches/Matches';
import Image from "../../assets/matches.png";
import logo from "../../assets/ebetz-tournaments.png"
import "./style.css";


class BracketCard extends Component {

    state = {
        url: this.props.match.params.tournament,
    }

    render() {
        return (
            <div>
                <div className="header" style={{ backgroundImage: `url(${Image})` }}>
                    <div className="overlay">
                        <img className="img-logo" src={logo} alt="Logo" />;
                </div>
                </div>
                <Container fluid={true}>
                    <Matches matchName={this.state.url} />
                </Container>
            </div>
        )
    }
}

export default BracketCard;

