import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";
function Header() {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Post-it</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:
            <a href={`/userprofile/${user?.uid}`}>{user?.displayName}</a>
          </Navbar.Text>
          <Button className="whiteBtn mx-2" onClick={logout}>
            {user ? "Logout" : "Login"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
