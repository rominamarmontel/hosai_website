import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const ContactScreen = ({ location, history }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState(null);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) {
      setMessage("Please enter your name, email, message!");
    } else {
      dispatch(register(contactName, contactEmail, contactMessage));
    }
  };
  return (
    <FormContainer>
      <br></br>
      <br></br>
      <Row className="container text-left">
        <Col md={1}>
          <Link className="my-6" to="/" style={{ textDecoration: "none" }}>
            <h6>Accueil</h6>
          </Link>
        </Col>
        <Col md={1}>
          <h6>
            <strong> / Contact</strong>
          </h6>
          <h5>
            <strong>Contact</strong>
          </h5>
        </Col>
      </Row>
      <Row>
        <Col md={6}></Col>
        <Col className="container text-left" md={6}>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="contactEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="submit"
                placeholder="Message"
                value={contactMessage}
                row="10"
                onChange={(e) => setContactMessage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="my-3" type="submit" variant="primary">
              Send
            </Button>
          </Form>

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
        </Col>
      </Row>
    </FormContainer>
  );
};

export default ContactScreen;
