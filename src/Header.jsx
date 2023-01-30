import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" />
              Project1
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light "
        style={{
          color: "white",
          boxShadow: "0 1px 0 0 rgb(17 17 17 / 9%)",
          position: "fixed",
          width: "100%",
          top: "0px",
        }}
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav " style={{ color: "white" }}>
              <li class="nav-item" style={{ cursor: "pointer" }}>
                <Link class="nav-link" to="/">
                  Project1
                </Link>
              </li>
              <li class="nav-item" style={{ cursor: "pointer" }}>
                <Link class="nav-link" to="/main2">
                  Project2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
