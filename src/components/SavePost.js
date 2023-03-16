import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post";
import { useGlobalContext } from "../context";
function SavePost() {
  const { savelist } = useGlobalContext();
  return (
    <Container>
      <Row>
        <h3>My favourite posts⭐</h3>
        {savelist &&
          savelist.map((post) => {
            return (
              <Col md="6" key={post.id} className="savePost">
                <Post post={post} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default SavePost;
