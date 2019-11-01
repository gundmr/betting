import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Tournaments from '../components/Tournaments';



function Home() {

    return(
        <div className="mt-5">
            <Container fluid={true}>
                <Tournaments />
            </Container>
        </div>
    );
}

export default Home;

