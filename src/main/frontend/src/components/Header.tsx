import * as React from 'react';
import Logo from "../img/innexgo_logo_dark.png";
import { Navbar, Button, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light justify-content-start" fixed="top">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav className="ml-auto">
        <div>
          <Button href="/dashboard" variant="outline-dark" size="lg">Login</Button>
          <Button href="/register" variant="primary" size="lg">Sign Up</Button>
        </div>

      </Nav>

    </Navbar>
  );
}
export default Header;
