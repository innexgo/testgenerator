import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestBanksAll from '../components/TestBanksAll';


function TestReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><TestBanksAll /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestReport;
