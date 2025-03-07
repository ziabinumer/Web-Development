import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark" className="mb-4">
    <Container>
      <Navbar.Brand className="mx-auto">Global Quran Institute</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
