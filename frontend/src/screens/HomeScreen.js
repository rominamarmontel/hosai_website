import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Topic from "../components/Topic";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listTopics } from "../actions/topicActions";
import Slider from "../components/Slider/Slider";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const topicList = useSelector((state) => state.topicList);
  const { loading, error, topics } = topicList;

  useEffect(() => {
    dispatch(listTopics());
  }, [useDispatch]);

  return (
    <>
      <Slider />
      <h1>News & Information</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {topics &&
              topics.map((topic) => (
                <Col key={topic._id} sm={12} md={6} lg={4} xl={3}>
                  <Topic topic={topic} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
