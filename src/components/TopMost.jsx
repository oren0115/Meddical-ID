import React from "react";
import { Container, Nav } from "react-bootstrap";
import phoneIcon from "../assets/icons/phone.png"; // Emergency icon
import clockIcon from "../assets/icons/clock.png"; // Work hour icon
import locationIcon from "../assets/icons/location.png"; // Location icon

function TopMost() {
  return (
    <Container>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="py-2 d-none d-md-flex">
        {/* Added classes to hide on smaller screens */}
        <Nav.Item className="me-auto">
          <Nav.Link className="yeseva-one-regular fs-1" href="/home">
            MED<span className="text-secondary">DICAL</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="work-sans-medium-500">
          <Nav.Link
            eventKey="link-1"
            className="nav-customs d-flex align-items-center">
            <img
              className="img-icons me-2"
              src={phoneIcon}
              alt="Phone Icon"
              style={{ width: "30px" }}
            />
            <div>
              <div>
                <strong>EMERGENCY :</strong>
              </div>
              <div>
                {/* Replace <a> with a button to handle phone call */}
                <button
                  onClick={() => (window.location.href = "tel:+237681812255")}
                  className="btn btn-link p-0">
                  (237) 681-812-255
                </button>
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="work-sans-medium-500">
          <Nav.Link
            eventKey="link-2"
            className="nav-customs d-flex align-items-center">
            <img
              className="img-icons me-2"
              src={clockIcon}
              alt="Clock Icon"
              style={{ width: "30px" }}
            />
            <div>
              <div>
                <strong>WORK HOUR :</strong>
              </div>
              <div>09:00 - 20:00 Everyday</div>
            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="work-sans-medium-500">
          <Nav.Link
            eventKey="link-3"
            className="nav-customs d-flex align-items-center">
            <img
              className="img-icons me-2"
              src={locationIcon}
              alt="Location Icon"
              style={{ width: "30px" }}
            />
            <div>
              <div>
                <strong>LOCATION :</strong>
              </div>
              <div>0123 Some Place</div>
            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default TopMost;
