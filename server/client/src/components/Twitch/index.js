import React from "react";
import TwitchEmbedVideo from "react-twitch-embed-video"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import BetButton from "../BetButton";
import "./style.css";

class Twitch extends React.Component {
    
    render() {
        return (
            <div>
                <Container fluid={true} className="Container">
                    <Row>
                    <Col lg={1} className="TeamContainer">
                        </Col>
                        <Col lg={10}>
                            <ResponsiveEmbed aspectRatio="16by9">
                                <TwitchEmbedVideo
                                    autoplay
                                    channel="riotgames"
                                    muted={true}
                                    targetClass="twitch-embed"
                                />
                            </ResponsiveEmbed>
                            <div className="BetBtnContainer">
                                <BetButton />
                            </div>
                        </Col>
                        <Col lg={1} className="TeamContainer">
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Twitch;