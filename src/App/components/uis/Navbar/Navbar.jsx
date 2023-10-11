import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { Nav, Container, Navbar as NavBar } from "react-bootstrap";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to={"/home"}>
            <NavBar.Brand>Home</NavBar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to={"/home"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/editor"}>
              <Nav.Link>New</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/editor/2"}>
              <Nav.Link>Edit id2</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/thumbnail"}>
              <Nav.Link>Thumbnail</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
