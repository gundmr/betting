import React from 'react';
import Container from 'react-bootstrap/Container';
import Tournaments from '../components/Tournaments';
import Image from '../assets/helmet.jpeg';



function Home() {

    return(
        <div className="mt-5">
            <Container fluid={true}>
                    <img 
                        className="img-tourn" 
                        src={Image} 
                        alt="Logo" 
                        style={{disply: "flex",
                                width: "100%"}} />
                <Tournaments />
            </Container>
        </div>
    );
}

export default Home;

