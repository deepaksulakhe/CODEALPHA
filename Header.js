import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>E-Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  <Badge bg="primary" className="ms-1">0</Badge>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;