import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavMenuLink from '../NavMenuLink';
import Logo from '../Logo';
import { HOME_PAGE, POSTS_PAGE } from '../../constants/urls';

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <NavMenuLink url={HOME_PAGE}>Home</NavMenuLink>
          <NavMenuLink url={POSTS_PAGE}>Posts</NavMenuLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
