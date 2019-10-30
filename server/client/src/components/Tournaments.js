import React from "react";
import API from '../utils/API'
import { List, ListItem } from "../components/List/index";
import { Link } from "react-router-dom";

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
            <div>
                {this.state.tournaments.length ? (
                    <List>
                        {this.state.tournaments.map(tournament => (
                            <ListItem key={tournament.slug}>
                                <Link to={"/home/" + tournament.slug}>
                                    <strong>
                                        {tournament.slug.replace(/-/g, ' ')}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>Searching For All Current Tournaments</h3>
                    )}
            </div>
        );
    }
}

export default Tournaments;