import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TestBankQuestionsTable from '../components/TestBankQuestionsTable';
import TestBankEditDetails from '../components/TestBankEditDetails';
import { Container, Row, Col, InputGroup, FormControl, Table, Button } from 'react-bootstrap';

export default function EditTestBank(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <Container fluid style={{ marginTop: "1.5rem" }}>
        <TestBankEditDetails />
        <Row>
        <Col>
        <Table variant="dark" bordered>
          <thead>
            <tr>
              <th>#Easy: 25</th>
              <th>#Medium: 6</th>
              <th>#Hard: 1</th>
            </tr>
          </thead>
        </Table>
        </Col>
      </Row>
      <TestBankQuestionsTable selectable={false}/>
      <Row>
        <Col>
            <Button style={{marginTop: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#daa520'}} variant="outline-light" size="lg" block href="/testbankcopy">Copy Questions from Another Test Bank</Button>
        </Col>
        <Col>
            <Button style={{marginTop: '1.5rem', marginBottom: '1.5rem', backgroundColor: '#990000'}} variant="outline-light" size="lg" block href="/testbanks">Save</Button>
        </Col>
      </Row>
    </Container>
  </DashboardLayout>
};
