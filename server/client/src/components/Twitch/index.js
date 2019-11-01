import React from "react";
import TwitchEmbedVideo from "react-twitch-embed-video"
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import BetButton from "../BetButton";
import "./style.css";

function Twitch() {
    return (
        <div>
            <Container fluid={true} className= "Container">
                <Row>
                    <Col lg={3} className= "TeamContainer">
                        <div className = "Team1">
                            Team 1
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <TwitchEmbedVideo
                                autoplay
                                channel="riotgames"
                                layout="video"
                                muted={true}
                                targetClass="twitch-embed"
                            />
                        </ResponsiveEmbed>
                        <div className="BetBtnContainer">
                        <BetButton/>
                        </div>
                    </Col>
                    <Col lg={3} className= "TeamContainer">
                        <div className = "Team2">
                            Team 2
                        </div>
                    </Col> 
                </Row>
            </Container>
        </div>

    );
}

export default Twitch;