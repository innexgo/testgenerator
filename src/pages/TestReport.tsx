import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import AllTests from '../components/AllTests';
import ATAnalytics from '../components/AllTestsAnalytics';
import '../components/sidenav.css';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><AllTests /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;


