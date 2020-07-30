import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestTimingPerClass from '../components/TestTimingPerClass';
import SelectStudentsForTest from '../components/SelectStudentsForTest';

function TestReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col sm={4}><TestSelection /><TestTimingPerClass /></Col>
          <Col sm={8}><SelectStudentsForTest /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestReport;
