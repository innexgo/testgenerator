import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import TestEmailer from '../components/TestEmailer';
import TestSelection from '../components/TestSelection';


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
