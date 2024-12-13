import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Jumbotron() {
  return (
    <Container fluid className="p-0 bg-jumbotron">
      <Container className="text-center text-md-start">
        <Row className="align-items-center">
          {/* Gambar Responsif */}
          <Col
            xs={12}
            md={6}
            className="order-1 order-md-2 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src="../src/assets/foto.png"
              alt="Healthcare Illustration"
              className="img-fluid jumbotron-image"
            />
          </Col>
          {/* Konten Jumbotron */}
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h5 className="text-primary mb-2 work-sans-medium-500">
              CARING FOR LIFE
            </h5>
            <h1 className="display-4 text-dark yeseva-one-regular">
              Leading the Way in Medical Excellence
            </h1>
            <Button
              variant="primary"
              size="lg"
              className="mt-4 px-4 py-2 rounded-pill"
              onClick={() => console.log("Navigate to Our Services")}>
              Our Services
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Jumbotron;
