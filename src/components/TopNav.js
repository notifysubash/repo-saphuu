import React from 'react'
import {Nav, Navbar, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'

function TopNav(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Saphuu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/apitester">Api Tester</Nav.Link>
            <Nav.Link href="/upload">Upload Files</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
}
export default TopNav;