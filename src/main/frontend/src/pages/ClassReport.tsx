import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import ClassStatistics from '../components/ClassStatistics';
import StudentResults from '../components/StudentResults';
import ReportsCurrentTests from '../components/ReportsCurrentTests';
import ClassCharts from '../components/ClassCharts';

function ClassReport(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col sm={8} style={{marginTop: "-1.5rem"}}><ClassStatistics /><ReportsCurrentTests /></Col>
          <Col sm={4}><ClassCharts /><StudentResults /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default ClassReport;
