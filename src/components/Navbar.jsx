import React from "react";
import { randomAvatar } from "../utils";

import { Navbar, Container, Image, NavDropdown, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUser, useUserActions } from "../hooks/user.actions";

function Navigationbar() {
  const navigate = useNavigate();
  const user = getUser();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login/");
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="fw-bold" href="#home">
          Postagram
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              title={
                <Image
                  src={user.avatar}
                  roundedCircle
                  width={36}
                  height={36}
                />
              }
            >
              <NavDropdown.Item as={Link} to={`api/profile/${user.id}/`}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;