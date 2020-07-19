import * as React from 'react';
import { connect } from "react-redux";
import { CurrentState } from "../store/auth/types";
import Logo from "../img/innexgo_logo_dark.png";
import { Navbar, Button, Nav } from 'react-bootstrap';

interface IProps {
  isAuthenticated: boolean | null;
}

const Header = ({ isAuthenticated }: IProps) => {
  const logInOut = isAuthenticated ? (
                                    <div>
                                <Button href="/logout" variant="outline-dark" size="lg">Log Out</Button>
                                </div>
                        )  : (
                                       <div>
                                       <Button href="/login" variant="outline-dark" size="lg">Login</Button>
                                        <Button href="/register" variant="primary" size="lg">Sign Up</Button>
                          </div>
                          );


  return(

                <Navbar bg="light justify-content-start" fixed="top">
                                      <Navbar.Brand href="/">
                        <img src={Logo} alt="Logo" />
                      </Navbar.Brand>

                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/features">Features</Nav.Link>
                                        <Nav.Link href="/pricing">Pricing</Nav.Link>
                                        <Nav className="ml-auto">
                                                                    {logInOut}
                                                                    </Nav>

                </Navbar>
);
}

const mapStateToProps = (state: CurrentState) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(
  mapStateToProps,
)(Header);
