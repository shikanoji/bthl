import React from 'react';
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logo from '../assets/images/logo.svg';
export default function NavMenu(props) {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Nav.Link href="/main/home">
            <NavbarBrand className="d-flex align-items-center">
              <img src={logo} width={30} height={30} title alt />
              &nbsp;
              <span>
                <b>XemSoDep</b>
              </span>
            </NavbarBrand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/main/home">
                <span>
                  <b>Trang chủ</b>
                </span>
              </Nav.Link>
              <Nav.Link href="/main/gieo-que">
                <span>
                  <b>Gieo Quẻ</b>
                </span>
              </Nav.Link>
              <Nav.Link href="/main/app-download">
                <span>
                  <b>Tải ứng dụng</b>
                </span>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}