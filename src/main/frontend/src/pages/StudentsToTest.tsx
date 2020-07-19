import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestTimingPerClass from '../components/TestTimingPerClass';
import SelectStudentsForTest from '../components/SelectStudentsForTest';
import '../components/sidenav.css';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={4}><TestSelection /><TestTimingPerClass /></Col>
          <Col sm={8}><SelectStudentsForTest /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
