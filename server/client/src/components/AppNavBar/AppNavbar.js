import React, { Component } from 'react';
import { connect } from 'react-redux';
import BetButton from '../BetButton';


import {
  Navbar,
  NavbarBrand,
  NavLink,
  Container
} from 'reactstrap';

// import Navbar from 'react-bootstrap/Navbar'; 
// import NavbarBrand from 'react-bootstrap/NavbarBrand'; 

class Navigation extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (
          <Container>
              <NavbarBrand href="/">BETS</NavbarBrand>
              <NavLink href="/auth/google">Sign In</NavLink>
          </Container>
        );
      default:
        return(
          <Container>
              <NavbarBrand href="/">BETS</NavbarBrand>
              <BetButton />
              <NavLink href="/api/logout">Logout</NavLink>
          </Container>
        );
    }
  }

  render() {
    console.log(this.props);
    return(
      <Navbar color="dark" dark expand="sm" className="mb-5">
        {this.renderContent()}

      </Navbar>

        
      );
    }
  };

  function mapStateToProps({ auth }){
    return { auth };
  }

export default connect(mapStateToProps) (Navigation);