import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
function Profile() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <Container className="text-center">
      <div className="profileBox m-auto py-5">
        {user ? (
          <>
            <div
              className="userPic m-auto"
              style={{ backgroundImage: `url("${user?.photoURL}")` }}
            ></div>
            <div className="userName">{user?.displayName}</div>
            <div className="userEmail">{user?.email}</div>
            <Button
              className="m-2"
              style={{ background: "black" }}
              onClick={() => navigate("/favouritepost")}
            >
              Your favourite post
            </Button>
          </>
        ) : (
          <h5>No user</h5>
        )}
      </div>
    </Container>
  );
}

export default Profile;
