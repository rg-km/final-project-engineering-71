import React from "react";

// import side bar
import Sidebar from "../components/Sidebar";

// import form bootstrap
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Create_Project() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} style={{padding: 0}}><Sidebar /></Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}

export default Create_Project;
