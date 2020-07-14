import React from 'react';
import TestBankQuestionsTable from '../components/TestBankQuestionsTable';
import { Container, Row, Col, InputGroup, FormControl, Table, Button } from 'react-bootstrap';

export default function EditTestBank(){
  return (
    <Container fluid>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Test Bank Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              defaultValue="APCS-A unit 1" //plug in actual test name
            />
          </InputGroup>
          
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Date Created</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              readOnly
              defaultValue="August 5, 2020" //plug in actual test name
            />
          </InputGroup>

        </Col>

        <Col>
                    <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Description</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              defaultValue="CSA ch 4 - 1D" //plug in actual test name
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Date Last Modified</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              readOnly
              defaultValue="September 3, 2020" //plug in actual test name
            />
          </InputGroup>
        </Col>
        </Row>
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
        <Button className="float-right" variant="primary">Submit</Button>
        </Col>
      </Row>
      <TestBankQuestionsTable />
    </Container>
  );
}
      
