import React from 'react';
import TestBankQuestionsTable from '../components/TestBankQuestionsTable';
import TestBankEditDetails from '../components/TestBankEditDetails';
import { Container, Row, Col, InputGroup, FormControl, Table, Button } from 'react-bootstrap';

export default function EditTestBank(){
  return (
    <Container fluid>
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
        <Col>
        <Button className="float-right ml-3" variant="primary">Submit</Button>
        <Button className="float-right " href="/TestBankCopy" variant="primary">Copy Questions from Another Test Bank</Button>
        </Col>
      </Row>
      <TestBankQuestionsTable selectable={false}/>
    </Container>
  );
}
      
