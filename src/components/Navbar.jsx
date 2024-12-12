import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import FaSearch from "../assets/icons/search.svg"; // Import the search icon as an SVG

function MenuNav() {
  const [showSearch, setShowSearch] = useState(false);

  // Toggle search form visibility
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Container fluid className="bg-primary w-100" data-bs-theme="dark">
      <Container>
        <Navbar expand="md">
          {/* Navbar.Brand visible only on sm screens */}
          <Navbar.Brand
            className="yeseva-one-regular fs-1 d-block d-md-none"
            href="#">
            MED<span className="text-secondary">DICAL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            scrollable="true">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="overflow-auto">
              <Nav className="justify-content-start flex-grow-1 pe-3 work-sans-medium-500">
                <Nav.Item>
                  <Nav.Link as={Link} to="/home">
                    Home
                  </Nav.Link>{" "}
                  {/* Using Link for routing */}
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about">
                    About Us
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/doctors">
                    Doctors
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/news">
                    News
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Search Form Toggle */}
              <div className="d-flex align-items-center">
                {/* Show search icon only when the form is hidden */}
                {!showSearch && (
                  <Button variant="outline-light" onClick={toggleSearch}>
                    <img
                      src={FaSearch}
                      alt="Search"
                      style={{ width: "20px" }}
                    />{" "}
                    {/* Search Icon */}
                  </Button>
                )}

                {/* Search Form */}
                {showSearch && (
                  <Form className="d-flex mt-3">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-light" onClick={toggleSearch}>
                      <img
                        src={FaSearch}
                        alt="Search"
                        style={{ width: "20px" }}
                      />{" "}
                      {/* Search Icon */}
                    </Button>
                  </Form>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </Container>
  );
}

export default MenuNav;
