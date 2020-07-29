import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import TestSchedulerForAssignment from '../components/TestSchedulerForAssignment';
import TestSelection from '../components/TestSelection';


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
