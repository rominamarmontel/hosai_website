import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Topic = ({ topic }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/topic/${topic._id}`}>
        <Card.Img src={topic.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/topic/${topic._id}`}>
          <Card.Title as="div">
            <strong>{topic.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Card
            className=""
            value={topic.description}
            text={`${topic.description} description`}
          />
        </Card.Text>

        <Card.Text as="h4">{topic.updateAt}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Topic;
