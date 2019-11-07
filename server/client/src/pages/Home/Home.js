import React from 'react';
import Container from 'react-bootstrap/Container';
import Tournaments from '../../components/Tournaments';
import Image from "../../assets/darkbackground.jpg";
import logo from "../../assets/ebetz-matches.png"
import "./style.css"



function Home() {

    return(
        <div>
            <div className="header" style={{ backgroundImage: `url(${Image})` }}>
                <div className="overlay">
                    <img className="img-logo" src={logo} alt="Logo" />;
            </div>
            </div>
            <Container>
                <Tournaments />
            </Container>
        </div>
    );
}

export default Home;

