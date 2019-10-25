import React, { Component } from "react";
//import { BrowserRouter, Route } from 'react-router-dom';
<<<<<<< HEAD:server/client/src/pages/App.js
import AppNavbar from '../components/AppNavBar/AppNavbar';
//import Modal from './components/Modal';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import BetButton from '../components/BetButton';
import API from "../utils/API";
=======
import { connect } from 'react-redux';
import * as actions from '../actions';


import AppNavbar from '../components/AppNavBar/AppNavbar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
// import BetButton from './components/BetButton';
//import Modal from './components/Modal';
>>>>>>> redirects:server/client/src/pages/App.js

import "./App.css";

class App extends Component {
  //use lifecycle method to see if user is signed in
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">

        <AppNavbar />
        <Container>
<<<<<<< HEAD:server/client/src/pages/App.js
          {/* <Modal /> */}
          {/* <HomePage /> */}
          <BetButton></BetButton>
          {/* <a href="/auth/google"> Sign in With Google</a> */}
=======
        {/* <Modal /> */}
        {/* <HomePage /> */}
        {/* <BetButton></BetButton> */}
        
>>>>>>> redirects:server/client/src/pages/App.js
        </Container>
        <Footer />

      </div>
    );
  }
}

export default connect(null, actions) (App);
