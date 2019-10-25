import React, { Component } from "react";
//import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import AppNavbar from '../components/AppNavBar/AppNavbar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
// import BetButton from './components/BetButton';
//import Modal from './components/Modal';

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
        {/* <Modal /> */}
        {/* <HomePage /> */}
        {/* <BetButton></BetButton> */}
        
        </Container>
        <Footer />

    </div>
    );
  }
}

export default connect(null, actions) (App);
