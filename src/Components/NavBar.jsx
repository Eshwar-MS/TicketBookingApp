import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <b onClick={() => navigate("/")}>E-Cube</b>
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control type="text" placeholder="Search" className="me-2" />
          <Button type="submit">
            <QuestionMarkIcon />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
