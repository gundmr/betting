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
    };

    componentDidMount() {
        API.getCurrentGame(this.props.gameName)
            .then(res =>
                this.setState({ games: res.data })
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
                    <strong class="gameName">
                        {this.state.games.name}
                    </strong>
                    <Row>
                        <Col>
                            <List>
                                <ListItem>
                                    <strong>
                                        {this.state.games.opponents[0].opponent.name}
                                    </strong>
                                </ListItem>
                            </List>
                        </Col>
                        <Col>
                            <List>
                                <ListItem>
                                    <strong>
                                        {this.state.games.opponents[1].opponent.name}
                                    </strong>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GameInfo;