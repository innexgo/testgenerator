import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestStatistics from '../components/TestStatistics';
import StudentResults from '../components/StudentResults';
import AllTestOccurrences from '../components/AllTestOccurrences';
import TestCharts from '../components/TestCharts';

function TestReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
          <Col sm={8}><AllTestOccurrences /><StudentResults /></Col>
          <Col sm={4}><TestCharts /><TestStatistics /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestReport;
