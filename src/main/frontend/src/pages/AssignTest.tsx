import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestSchedulerForAssignment from '../components/TestSchedulerForAssignment';
import TestSelection from '../components/TestSelection';


function AssignTest(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
        </Row>
        <Row>
          <Col><TestSchedulerForAssignment /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default AssignTest;
