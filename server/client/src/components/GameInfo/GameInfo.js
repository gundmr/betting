import React from "react";
import API from '../../utils/API'
import { ListItem } from "../List/index";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TeamImage from "../TeamImage";
import "./style.css";
import BetButton from "../Betbutton/BetButton";
import PlayerImage from "../PlayerImage/index";

class GameInfo extends React.Component {
    state = {
        games: [],
        team1: [],
        teamName1: [],
        team2: [],
        teamName2: [],
        players1: [],
        players2: [],
    };

    componentDidMount() {
        API.getCurrentGame(this.props.gameName).then(res =>
            this.setState({ games: res.data, team1: res.data.opponents[0].opponent.slug, team2: res.data.opponents[1].opponent.slug, teamName1: res.data.opponents[0].opponent.name, teamName2: res.data.opponents[1].opponent.name },
                () => {
                    API.getPlayersFromTeam(this.state.team1).then(res =>
                        this.setState({ players1: res.data.players })
                    )
                    API.getPlayersFromTeam(this.state.team2).then(res =>
                        this.setState({ players2: res.data.players })
                    )
                }
            )
        ).catch(err => console.log(err))
    };

    render() {

        if (!this.state.games.opponents) {
            return <span>Loading...</span>;
        }
        var first = this.state.games.opponents[0];
        console.log(first);
        return (
            <div>
                <Container>
                    <Row className="row justify-content-md-center">
                        <Col className="text-center">
                            <div className="BetBtnContainer">
                                <BetButton teamName1={this.state.teamName1} teamName2={this.state.teamName2} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListItem>
                                <TeamImage
                                    image={this.state.games.opponents[0].opponent.image_url}
                                />
                                <strong>
                                    {this.state.games.opponents[0].opponent.name}
                                </strong>
                            </ListItem>
                            {this.state.players1.length ? (
                                <div>
                                    {this.state.players1.map(player1 => (
                                        <ListItem key={player1.slug}>
                                            {/* <Link to={"/players/" + player1.slug}> */}
                                            <PlayerImage
                                                image={player1.image_url}
                                            />
                                            <strong>
                                                {player1.slug.replace(/-/g, ' ')}
                                            </strong>
                                            {/* </Link> */}
                                        </ListItem>
                                    ))}
                                </div>
                            ) : (
                                    <h3>Searching For All Players</h3>
                                )}
                        </Col>
                        <Col>
                            <ListItem>
                                <TeamImage
                                    image={this.state.games.opponents[1].opponent.image_url}
                                />
                                <strong>
                                    {this.state.games.opponents[1].opponent.name}
                                </strong>
                            </ListItem>
                            {this.state.players2.length ? (
                                <div>
                                    {this.state.players2.map(player2 => (
                                        <ListItem key={player2.slug}>
                                            {/* <Link to={"/players/" + player2.slug}> */}
                                            <PlayerImage
                                                image={player2.image_url}
                                            />
                                            <strong>
                                                {player2.slug.replace(/-/g, ' ')}
                                            </strong>
                                            {/* </Link> */}
                                        </ListItem>
                                    ))}
                                </div>
                            ) : (
                                    <h3>Searching For Players</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default GameInfo;