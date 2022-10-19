import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <LinkContainer to="/">
          <i className="bi bi-facebook"></i>
        </LinkContainer>
        <Row>
          <Col className="text-center py-5">
            Copyright &copy; KANRAKU HOSAI Website
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
