import React from 'react';
import "./style.css";
import logo from "../../assets/ebetz2.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desktopImage from '../../assets/scales.jpg';
import mobileImage from '../../assets/scales.jpg';
import Container from 'react-bootstrap/Container';

const SignIn = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

    return (
        <div>
            <div className="header" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="overlay">
                    <img className="img-logo" src={logo} alt="Logo" />;
            </div>
            </div>
            <Container>
                <Row className="row justify-content-md-center">
                    <Col className="text-center">
                        <h1>Sign in to Bet</h1>
                        <p>New Users Receive 10k Points</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignIn;


// function SignIn() {

    //     return(
    //         <header className="mt-0 header">
    //                 <div class="overlay"></div>
    //                     <h1>Sign In to Find Your Team and Place Your Bets</h1>
    //         </header>

    //     );
    // }

    // export default SignIn;


