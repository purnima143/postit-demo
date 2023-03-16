import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useGlobalContext } from "../context";
function Post({ post }) {
  const { handleFavourite, selected } = useGlobalContext();
  return (
    <Container className="postBox p-2 m-2" key={post.id}>
      <Row className="postHeader pt-2 m-0">
        <Col className="postTitle">{post?.title}</Col>
        <Col md="2" className="text-center">
          <Button
            className={`${
              selected === post.id ? "selectedBtn" : "favouriteBtn"
            }`}
            onClick={() => handleFavourite(post)}
          >
            🏷️
          </Button>
        </Col>
      </Row>
      <Row className="postFooter m-0 pt-2">
        <Col className="postBody">{post?.body} </Col>
      </Row>
    </Container>
  );
}

export default Post;
