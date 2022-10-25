import React from "react";
import emailjs from "emailjs-com";
import Meta from "../components/Meta";
import { Form, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

const ContactScreen = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    //const userId = process.env.REACT_APP_USER_ID;
    //const serviceId = process.env.REACT_APP_SERVICE_ID;
    //const templateId = process.env.REACT_APP_TEMPLATE_ID;
    //e.target = ユーザーがフォームから送信した内容
    emailjs
      .sendForm(
        "service_hx5mb28",
        "template_jyd5gjs",
        e.target,
        "ySJray8WzDPn86KSh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <FormContainer>
      <Meta title="Login" />
      <Row className="container text-left mx-auto">
        <Col md={1}>
          <Link to="/">
            <p>Accueil</p>
          </Link>
        </Col>
        <Col md={11}>
          <p>
            <strong> Contact</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <h1>
            <strong>Contact</strong>
          </h1>
        </Col>
        <Col md={2}>
          <i class="fa-brands fa-facebook-f px-2 pt-5 fa-lg size"></i>
          <i class="fa-brands fa-twitter px-2 fa-lg size"></i>
          <i class="fa-brands fa-youtube px-2 fa-lg size"></i>
          <i class="fa-brands fa-square-instagram px-2 fa-lg size"></i>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <div className="container text-left" md={6}>
            <Form onSubmit={sendEmail}>
              <div className="col-8 form.group mx-auto">
                <div className="contactMe">
                  If you have any question, <br></br>Please contact me!!
                </div>
                <br></br>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>

              <div className="col-8 form-group pt-3 mx-auto">
                <Form.Label>Email Address</Form.Label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-3 mx-auto">
                <Form.Label>Your Message</Form.Label>
                <textarea
                  className="form-control"
                  id=""
                  cols="15"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-4 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="send Message"
                ></input>
              </div>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <Row className="container text-left">
            <div className="contactMe">Company Information</div>

            <Row className="container text-left pt-3 mx-auto">
              <Col md={4}>Company Name :</Col>
              <Col md={8}>NAGASE KIKAKU</Col>
            </Row>

            <Row className="container text-left pt-3 mx-auto">
              <Col md={4}>Address :</Col>
              <Col md={8}>1-8-3-203 IIDABASHI CHIYODAKU TOKYO</Col>
            </Row>
            <Row className="container text-left pt-3 mx-auto">
              <Col md={4}>Tel :</Col>
              <Col md={8}>03-1234-5678</Col>
            </Row>
            <Row className="pt-3 mx-auto">
              <iframe
                title="googleMap for NAGASE KIKAKU"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0898386525987!2d139.7460867152472!3d35.69940678019012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c419ddc654f%3A0x6d05ebb51f310234!2z5pel5pys44CB44CSMTAyLTAwNzIg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy66aOv55Sw5qmL77yR5LiB55uu77yY4oiS77yT!5e0!3m2!1sja!2sfr!4v1666716737155!5m2!1sja!2sfr"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Row>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default ContactScreen;
