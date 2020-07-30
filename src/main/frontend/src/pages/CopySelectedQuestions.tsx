import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TestBankQuestionsSelect from '../components/TestBankQuestionsSelect';
import TestBankDetails from '../components/TestBankDetails';
import { Container, Row, Col, InputGroup, FormControl, Table, Button } from 'react-bootstrap';

export default function EditTestBank(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <Container fluid style={{ marginTop: "1.5rem" }}>
        <TestBankDetails canEdit={true}/>
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
        <Col>
        </Col>
      </Row>
      <TestBankQuestionsSelect />
    </Container>
  </DashboardLayout>
};
