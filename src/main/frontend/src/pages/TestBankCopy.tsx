import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import CopyTestBankQuestions from '../components/CopyTestBankQuestions';
import TestBankSelection from '../components/TestBankSelection';
import '../components/sidenav.css';


function TestReport() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col><TestBankSelection /></Col>
        </Row>
        <Row>
          <Col><CopyTestBankQuestions /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestReport;
