import React, { Component } from "react";
//import { BrowserRouter, Route } from 'react-router-dom';
import AppNavbar from '../components/AppNavBar/AppNavbar';
//import Modal from './components/Modal';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import BetButton from '../components/BetButton';
import "./App.css";
import Tournaments from "../components/Tournaments";

class App extends Component {

  // state = {
  //   tournaments: [],
  // };

  // // componentDidMount() {
  // //   API.getCurrentLeagueTournament()
  // //     .then(res =>
  // //       this.setState({ tournaments: res.data })
  // //     )
  // //     .catch(err => console.log(err));
  // //   // this.state.tournaments.maps( tournament => (tournament.data.slug))
  // //   // console.log(tournament);
  // // }


  render() {
    return (
      <div className="App">

        <AppNavbar />
        <Container>
          {/* <Modal /> */}
          {/* <HomePage /> */}
          <BetButton></BetButton>
          <Tournaments></Tournaments>
          {/* <a href="/auth/google"> Sign in With Google</a> */}
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
