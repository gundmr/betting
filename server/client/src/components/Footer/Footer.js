import React from 'react';
import Row from 'react-bootstrap/Row';
import "./style.css";
import Container from 'react-bootstrap/Container';


function Footer() {

    return (
        <footer className="footer">
            <Container>
                <Row  className="justify-content-md-center">
                <span className="text-muted footer-text">Copyright &copy;</span>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

