import React from "react";
import API from '../../utils/API'
import { List, ListItem } from "../List/index";
import { Link } from "react-router-dom";

class Matches extends React.Component {
    state = {
        matches: [],
    };

    componentDidMount() {
        API.getCurrentMatches(window.location.pathname.split("/")[2])
            .then(res =>
                this.setState({ matches: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.matches.length ? (
                    <List>
                        {this.state.matches.map(match => (
                            <ListItem key={match.slug}>
                                <Link to={"/" + match.slug}>
                                    <strong>
                                        {match.name.replace(/-/g, ' ')}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>Searching For All Matches</h3>
                    )}
            </div>
        );
    }
}

export default Matches;