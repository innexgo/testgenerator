import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row, Button} from 'react-bootstrap';
import AddTestOptions from '../components/AddTestOptions';
import AddTestQuestions from '../components/AddTestQuestions';
import TestBankSelection from '../components/TestBankSelection';

function AddTest(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><AddTestOptions /><TestBankSelection /><AddTestQuestions /></Col>
        </Row>
        <Button style={{marginTop: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#daa520'}} variant="outline-light" size="lg" block href="/Tests">Save Test</Button>
        <Button style={{marginTop: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#990000'}} variant="outline-light" size="lg" block href="/Tests">Delete Test</Button>
      </Container>
    </div>
  </DashboardLayout>
};

export default AddTest;
