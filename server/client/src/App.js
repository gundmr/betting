import React, { Component } from "react";
//import { BrowserRouter, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar/AppNavbar';
//import Modal from './components/Modal';
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import BetButton from './components/BetButton';

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppNavbar />
        <Container>
        {/* <Modal /> */}
        {/* <HomePage /> */}
        <BetButton></BetButton>
        {/* <a href="/auth/google"> Sign in With Google</a> */}

        </Container>
        <Footer />

    </div>
    );
  }
}

export default App;
