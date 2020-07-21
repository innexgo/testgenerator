import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import ClassStatistics from '../components/ClassStatistics';
import StudentResults from '../components/StudentResults';
import AllTestOccurrences from '../components/AllTestOccurrences';
import ClassCharts from '../components/ClassCharts';
import '../components/sidenav.css';

function ClassReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={8}><AllTestOccurrences /><StudentResults /></Col>
          <Col sm={4}><ClassCharts /><ClassStatistics /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ClassReport;
