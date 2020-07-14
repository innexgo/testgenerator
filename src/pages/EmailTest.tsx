import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import TestEmailer from '../components/TestEmailer';
import TestSelection from '../components/TestSelection';
import '../components/sidenav.css';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
        </Row>
        <Row>
          <Col><TestEmailer /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
