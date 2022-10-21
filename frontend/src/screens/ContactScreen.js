import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

const ContactScreen = ({ location, history }) => {
  return (
    <>
      <FormContainer>
        <br></br>
        <br></br>
        <Row className="container text-left">
          <Col md={1}>
            <Link className="my-6" to="/" style={{ textDecoration: "none" }}>
              <h6>Accueil</h6>
            </Link>
          </Col>
          <Col md={2}>
            <h6>
              <strong> / Contact</strong>
            </h6>
          </Col>
          <h7>
            <strong>Contact</strong>
          </h7>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col className="container text-left" md={5}>
            <h1>Contact</h1>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group controlId="formBasicTextField">
              <Form.Label>Comment</Form.Label>
              <Form.Control />
            </Form.Group>
            <Button className="my-3" variant="success" type="submit">
              Submit
            </Button>
          </Col>
          <Col md={6}>
            <h1>Company Information</h1>
            <Row className="container text-left">
              <Col md={3}>Address : </Col>
              <Col md={9}>1-8-3-203 Iidabashi Mejiroku Tokyo</Col>
            </Row>
            <Row className="container text-left">
              <Col md={3}>Address : </Col>
              <Col md={9}>1-8-3-203 Iidabashi Mejiroku Tokyo</Col>
            </Row>
            <Row className="container text-left">
              <Col md={3}>Address : </Col>
              <Col md={9}>1-8-3-203 Iidabashi Mejiroku Tokyo</Col>
            </Row>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default ContactScreen;
