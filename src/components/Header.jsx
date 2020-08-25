import React from 'react'
import { Navbar, Nav, } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">kaede0902</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              href="mailto:kaede0902js@gmail.com"
            >Email</Nav.Link>
            <Nav.Link 
              href="https://kei-s-lifehack.hatenablog.com/"
            >Blog</Nav.Link>
            <Nav.Link 
              href="https://twitter.com/kaede_io"
            >Twitter</Nav.Link>
            <Nav.Link 
              href="https://github.com/kaede0902"
            >GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
