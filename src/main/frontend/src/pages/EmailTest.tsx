import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestEmailer from '../components/TestEmailer';
import TestSelection from '../components/TestSelection';


function TestReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
        </Row>
        <Row>
          <Col><TestEmailer /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestReport;
