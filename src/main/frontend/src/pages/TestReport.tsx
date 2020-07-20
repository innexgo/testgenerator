import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestStatistics from '../components/TestStatistics';
import StudentResults from '../components/StudentResults';
import AllTestOccurrences from '../components/AllTestOccurrences';
import ScoreDistribution from '../components/ScoreDistribution';
import '../components/sidenav.css';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><TestSelection /></Col>
          <Col sm={8}><AllTestOccurrences /><StudentResults /></Col>
          <Col sm={4}><ScoreDistribution /><TestStatistics /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
