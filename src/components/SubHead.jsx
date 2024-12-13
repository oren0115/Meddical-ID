import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function SubHead() {
  return (
    <>
      <Container className="py-5">
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={6} className="text-center">
            <h5 className="text-primary mb-2">WELCOME TO MEDDICAL</h5>
            <h2 className="fw-bold text-dark mb-3">
              A Great Place to Receive Care
            </h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit nascetur proin massa in. Consequat faucibus
              porttitor enim et.
            </p>
            <Link
              to="/more-info"
              className="mt-3 d-inline-flex align-items-center text-primary text-decoration-none">
              <span className="me-2">Learn More</span>
              <img
                src="../public/arrow.png"
                alt="Arrow Icon"
                className="arrow-icon"
              />
            </Link>
          </Col>
        </Row>
      </Container>
      {/* Gambar di luar Container */}
      <div className="subhead-image-wrapper">
        <img
          src="./src/assets/subhead.png"
          alt="Subheading Image"
          className="img-fluid"
        />
      </div>
    </>
  );
}

export default SubHead;
