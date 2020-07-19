import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../img/innexgo_transparent_icon.png";
import {Navbar} from 'react-bootstrap';

function Header () {
  return (
    <Navbar bg="dark justify-content-end">
      <Navbar.Brand href="/">
        <img src={Logo} alt="Logo" />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;

