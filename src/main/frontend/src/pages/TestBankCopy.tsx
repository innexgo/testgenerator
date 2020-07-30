import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import CopyTestBankQuestions from '../components/CopyTestBankQuestions';
import TestBankSelection from '../components/TestBankSelection';


function TestReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App">
      <Container fluid style={{ marginTop: "1.5rem" }}>
        <Row>
          <Col><TestBankSelection /></Col>
        </Row>
        <Row>
          <Col><CopyTestBankQuestions /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestReport;
