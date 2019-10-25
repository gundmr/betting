import React, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AppNavbar from '../components/AppNavBar/AppNavbar';
import { Container } from 'reactstrap';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Home from '../components/Home';
import "./App.css";
import Tournaments from "../components/Tournaments";

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
            <BrowserRouter>
              <div>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/home" component={Home} />
                    {/* <Modal /> */}
                    {/* <HomePage /> */}
                    {/* <BetButton></BetButton> */}
              </div>
            </BrowserRouter>
            <Tournaments></Tournaments>
          </Container>
        <Footer />

      </div>
    );
  }
}

export default connect(null, actions) (App);
