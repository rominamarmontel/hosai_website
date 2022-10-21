import React from "react";
import { Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import estimateImage from "../images/estimate.jpg";
import { Link } from "react-router-dom";

const EstimateScreen = () => {
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
              <strong> / Estimate</strong>
            </h6>
          </Col>
          <h7>
            <strong>Estimate</strong>
          </h7>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col className="container text-left" md={6}>
            <img
              src={estimateImage}
              alt="estimate"
              width={"1000"}
              height={"600"}
            ></img>
            <h1>Lorem</h1>
          </Col>
          <Col me={5}></Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default EstimateScreen;
