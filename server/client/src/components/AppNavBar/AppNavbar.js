import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLogo from '../../assets/navlogo.png'
import "./style.css";

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
            <NavbarBrand href="/">
              <img
                src={NavLogo}
                width="50"
                height="50"
                className="logo-img d-inline-block p-0 align-top"
                alt="EB"
              />
            </NavbarBrand>

              <NavLink href="/auth/google">Sign In</NavLink>
          </Container>
        );
      default:
        return(
          <Container>

            <NavbarBrand href="/home">
              <img
                src={NavLogo}
                width="50"
                height="50"
                className="logo-img d-inline-block p-0 align-top"
                alt="EB"
              />
            </NavbarBrand>
              {/* <NavLink>Points: {this.props.auth.points} </NavLink> */}
              <NavLink href="/api/logout">Logout</NavLink>
          </Container>
        );
    }
  }

  render() {
    console.log(this.props);
    return(
      <Navbar color="light" light expand="sm" className="mb-0 p-0">
        {this.renderContent()}

      </Navbar>

        
      );
    }
  };

  function mapStateToProps({ auth }){
    return { auth };
  }

export default connect(mapStateToProps) (Navigation);