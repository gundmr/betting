import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Footer() {

    return(
        <footer className="mt-0">
            <Container fluid={true}> 
                <Row className="justify-content-center p-3">
                    <p>Copyright &copy;</p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

