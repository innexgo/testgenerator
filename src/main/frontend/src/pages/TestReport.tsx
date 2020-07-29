import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestStatistics from '../components/TestStatistics';
import StudentResults from '../components/StudentResults';
import AllTestOccurrences from '../components/AllTestOccurrences';
import TestCharts from '../components/TestCharts';

function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
          <Col sm={8}><AllTestOccurrences /><StudentResults /></Col>
          <Col sm={4}><TestCharts /><TestStatistics /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
