import React from "react";
import API from '../utils/API'

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
                {this.state.tournaments.map(tournament => (
                    <div className="tournament" key={tournament.slug}>{tournament.slug}</div>
                ))}
            </div>
        );
    }
}

export default Tournaments;