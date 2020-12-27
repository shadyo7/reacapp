import React from "react";
import {Container , Row , Col} from 'reactstrap'
import Footer from "./reg/Footer";
import RegForm from "./reg/RegForm";
import Header from "./reg/Header";
import "./reg/Form.css";

function App() {
  return (
    <Container className="main">
        <Row>
        <Col><Header /></Col>
        </Row> 
        <Row>
        <Col><RegForm /></Col>
        </Row> 
        <Row>
        <Col><Footer /></Col>
        </Row>   
    </Container>
         );
}

export default App;
