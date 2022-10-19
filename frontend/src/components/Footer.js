import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer className="border-top pt-3">
      <Container>
        <LinkContainer to="/">
          <i className="bi bi-facebook"></i>
        </LinkContainer>
        <Row>
          <Col className="text-center pb-0">
            <h4>Copyright &copy; KANRAKU HOSAI Website</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
