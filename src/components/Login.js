import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        background: "white",
        display: "flex",
        flex: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button className="blackBtn" onClick={handleClick}>
        Sign in with google
      </Button>
    </div>
  );
}

export default Login;
