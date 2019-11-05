import React from "react";
import API from '../../utils/API'
import { List, ListItem } from "../List/index";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class GameInfo extends React.Component {
    state = {
        games: [],
        players1: [],
        players2: [],
    };

    componentDidMount() {
        API.getCurrentGame(this.props.gameName)
            .then(res =>
                this.setState({ games: res.data })
            )
            .catch(err => console.log(err));
    };

    getPlayersForTeam1(team1) {
        API.getPlayersFromTeam(team1)
            .then(res =>
                this.setState({ players1: res.data.players })
            )
            .catch(err => console.log(err));
    };

    getPlayersForTeam2(team2) {
        API.getPlayersFromTeam(team2)
            .then(res =>
                this.setState({ players2: res.data.players })
            )
            .catch(err => console.log(err));
    };


    render() {

        if (!this.state.games.opponents) {
            return <span>Loading...</span>;
        }
        // // var first = this.state.games.opponents[0];
        // console.log(first);
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <strong class="gameName, row justify-content-md-center">
                                {this.state.games.name}
                            </strong>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <ListItem>
                                <strong>
                                    {this.state.games.opponents[0].opponent.name}
                                    {this.getPlayersForTeam1(this.state.games.opponents[0].opponent.slug)}
                                </strong>
                            </ListItem>
                            {this.state.players1.length ? (
                                <div>
                                    {this.state.players1.map(player1 => (
                                        <ListItem key={player1.slug}>
                                            <Link to={"/players/" + player1.slug}>
                                                <strong>
                                                    {player1.slug.replace(/-/g, ' ')}
                                                </strong>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </div>
                            ) : (
                                    <h3>Searching For All Current Tournaments</h3>
                                )}
                        </Col>
                        <Col>
                            <ListItem>
                                <strong>
                                    {this.state.games.opponents[1].opponent.name}
                                    {this.getPlayersForTeam2(this.state.games.opponents[1].opponent.slug)}
                                </strong>
                            </ListItem>
                            {this.state.players2.length ? (
                                <div>
                                    {this.state.players2.map(player2 => (
                                        <ListItem key={player2.slug}>
                                            <Link to={"/players/" + player2.slug}>
                                                <strong>
                                                    {player2.slug.replace(/-/g, ' ')}
                                                </strong>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </div>
                            ) : (
                                    <h3>Searching For All Current Tournaments</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default GameInfo;