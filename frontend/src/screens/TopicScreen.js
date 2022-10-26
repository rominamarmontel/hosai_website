import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listTopicDetails } from "../actions/topicActions";
import Meta from "../components/Meta";

const TopicScreen = ({ match }) => {
  const dispatch = useDispatch();

  const topicDetails = useSelector((state) => state.topicDetails);
  const { loading, error, topic } = topicDetails;

  useEffect(() => {
    dispatch(listTopicDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Meta title="News & Info" />
          <Row>
            <ListGroup.Item>
              <h1>{topic.title}</h1>
            </ListGroup.Item>
          </Row>
          <Row className="topicImage">
            <Col md={6}>
              <Image
                src={topic.image}
                alt={topic.name}
                height={510}
                width={840}
                fluid
              />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Description: {topic.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default TopicScreen;
