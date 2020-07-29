import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import CurrentTestsDashboard from '../components/CurrentTestsDashboard';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><CurrentTestsDashboard /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
