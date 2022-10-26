import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listTopicDetails, updateTopic } from "../actions/topicActions";
import { TOPIC_UPDATE_RESET } from "../constants/topicConstants";

const TopicEditScreen = ({ match, history }) => {
  const topicId = match.params.id;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(0);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const topicDetails = useSelector((state) => state.topicDetails);
  const { loading, error, topic } = topicDetails;

  const topicUpdate = useSelector((state) => state.topicUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = topicUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: TOPIC_UPDATE_RESET });
      history.push("/admin/topiclist");
    } else {
      if (!topic.title || topic._id !== topicId) {
        dispatch(listTopicDetails(topicId));
      } else {
        setTitle(topic.title);
        setImage(topic.image);
        setDescription(topic.description);
      }
    }
  }, [dispatch, history, topicId, topic, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTopic({
        _id: topicId,
        title,
        image,
        description,
      })
    );
  };

  return (
    <>
      <Link to="/admin/topiclist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Topic</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                className="my-3"
                id="image-file"
                label=""
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="my-3" type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default TopicEditScreen;
