import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Post } from "./index";
import { useGlobalContext } from "../context";
function FavouritePost() {
  const { favouritelist } = useGlobalContext();
  return (
    <Container>
      <Row>
        <h3>My favourite posts⭐</h3>
        {favouritelist &&
          favouritelist.map((post) => {
            return (
              <Col md="6" key={post.id} className="favouritePost">
                <Post post={post} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default FavouritePost;
