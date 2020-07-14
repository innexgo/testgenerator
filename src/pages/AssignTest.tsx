import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import TestSchedulerForAssignment from '../components/TestSchedulerForAssignment';
import TestSelection from '../components/TestSelection';
import '../components/sidenav.css';


function AssignTest() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
        </Row>
        <Row>
          <Col><TestSchedulerForAssignment /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default AssignTest;
