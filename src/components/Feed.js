import React, { useEffect } from "react";
import { Post } from "./index";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function Feed() {
  const navigate = useNavigate();

  const { posts, fetchPosts } = useGlobalContext();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <Container>
      <Row>
        <Col>
          <h3>Posts📌</h3>
        </Col>
        <Col md="auto">
          <Button
            className="m-2"
            style={{ background: "black" }}
            onClick={() => navigate("/savepost")}
          >
            Your favourite post
          </Button>
        </Col>
      </Row>
      <Row>
        {posts.slice(0, 20).map((post) => {
          return (
            <Col md="6" key={post.id}>
              <Post post={post} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Feed;
