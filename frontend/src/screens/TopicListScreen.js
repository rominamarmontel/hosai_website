import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listTopics, deleteTopic, createTopic } from "../actions/topicActions";
import { TOPIC_CREATE_RESET } from "../constants/topicConstants";

const TopicListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const topicList = useSelector((state) => state.topicList);
  const { loading, error, topics, page, pages } = topicList;

  const topicDelete = useSelector((state) => state.topicDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = topicDelete;

  const topicCreate = useSelector((state) => state.topicCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    topic: createdTopic,
  } = topicCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: TOPIC_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/topic/${createdTopic._id}/edit`);
    } else {
      dispatch(listTopics("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdTopic,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure???")) {
      dispatch(deleteTopic(id));
    }
  };

  const createTopictHandler = () => {
    dispatch(createTopic());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Topics</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createTopictHandler}>
            <i className="fas fa-plus"></i> Create Topic
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>DESCRIPTION</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr key={topic._id}>
                  <td>{topic._id}</td>
                  <td>{topic.title}</td>
                  <td>${topic.description}</td>
                  <td>
                    <LinkContainer to={`/admin/topic/${topic._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(topic._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default TopicListScreen;
