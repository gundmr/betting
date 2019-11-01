import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Footer() {

    return(
        <footer className="fixed-bottom">
            <Container> 
                <Row className="justify-content-center p-3">
                    <p>Copyright &copy;</p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

