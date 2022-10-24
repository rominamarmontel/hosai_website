import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="border-top pt-3">
      <Container>
        <Row>
          <Col className="text-center pb-0">
            <h6>Copyright &copy; KANRAKU HOSAI Website</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
