import React from 'react';
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { AiFillSlackCircle, AiFillStar, AiFillHdd } from "react-icons/ai";
export default function NavMenu(props) {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <NavbarBrand className="d-flex align-items-center">
            <AiFillSlackCircle></AiFillSlackCircle>
            <span>SHK Kinh Dịch</span>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/main/home">
                <AiFillStar></AiFillStar>
                &nbsp;<span>Trang chủ</span>
              </Nav.Link>
              <Nav.Link href="/main/number-check">
                <AiFillHdd></AiFillHdd>
                &nbsp; Xem số đẹp
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