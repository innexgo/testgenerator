import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Col, Row} from 'react-bootstrap';
import TestBanksChoose from '../components/TestBanksChoose';


function TestChooseTestBank(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5rem" }}>
      <Container fluid>
        <Row>
          <Col><TestBanksChoose /></Col>
        </Row>
      </Container>
    </div>
  </DashboardLayout>
};

export default TestChooseTestBank;
