import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import CopyTestBankQuestions from '../components/CopyTestBankQuestions';
import TestBankSelection from '../components/TestBankSelection';


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
