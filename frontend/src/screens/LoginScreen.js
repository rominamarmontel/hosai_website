import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import Meta from "../components/Meta";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin) {
        history.push("/admin/orderlist");
      } else {
        history.push(redirect);
      }
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <FormContainer>
        <Row className="container text-left mx-auto">
          <Col md={1}>
            <Link to="/">
              <p>Accueil</p>
            </Link>
          </Col>
          <Col md={11}>
            <p>
              <strong> Login Form</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <h1>
              <strong>Login</strong>
            </h1>
          </Col>
          <Col md={2}>
            <i className="fa-brands fa-facebook-f px-2 pt-5 fa-lg size"></i>
            <i className="fa-brands fa-twitter px-2 fa-lg size"></i>
            <i className="fa-brands fa-youtube px-2 fa-lg size"></i>
            <i className="fa-brands fa-square-instagram px-2 fa-lg size"></i>
          </Col>
        </Row>
        <>
          <Meta title="Login" />
          <Row>
            <Col md={3}></Col>
            <Col className="container text-left" md={6}>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button className="my-3" type="submit" variant="primary">
                  Login
                </Button>
              </Form>

              <Row className="py-3">
                <Col>
                  New Customer?{" "}
                  <Link
                    to={
                      redirect ? `/register?redirect=${redirect}` : "/register"
                    }
                  >
                    Register
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>
        </>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
