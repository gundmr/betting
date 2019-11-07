import React from "react";
import API from '../utils/API'
import { ListItem } from "../components/List/index";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

class Tournaments extends React.Component {
    state = {
        tournaments: [],
    };

    componentDidMount() {
        API.getCurrentLeagueTournament()
            .then(res =>
                this.setState({ tournaments: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                {this.state.tournaments.length ? (
                    <div>
                        {this.state.tournaments.map(tournament => (
                            <ListItem key={tournament.slug}>
                                <Link to={"/tournament/" + tournament.slug}>
                                    <strong>
                                        {tournament.slug.replace(/-/g, ' ')}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </div>
                ) : (
                        <h3>Searching For All Current Tournaments</h3>
                    )}
            </Container>
        );
    }
}

export default Tournaments;