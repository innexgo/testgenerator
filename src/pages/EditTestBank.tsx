import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Container, Col, Row} from 'react-bootstrap';
import TestSelection from '../components/TestSelection';
import TestBankQuestions from '../components/TestBankQuestions';
import '../components/sidenav.css';


function EditTestBank() {
  return (
    <div className="App">
      <Container fluid>
        <TestSelection />
        <TestBankQuestions />
      </Container>
    </div>
  );
}

export default EditTestBank;
