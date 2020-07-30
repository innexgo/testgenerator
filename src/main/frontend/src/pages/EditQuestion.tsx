import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import TestBankDetails from '../components/TestBankDetails';
import QuestionDetails from '../components/QuestionDetails';
import { Container, Form, Col, Button, Row, Tab, Tabs } from 'react-bootstrap';
import CSS from 'csstype';

export default function EditQuestion(props: AuthenticatedComponentProps) {
  const formStyle: CSS.Properties = {
    backgroundColor: 'white',
    padding: '2%',
  };
  return <DashboardLayout {...props}>
    <Container fluid style={{ marginTop: "1.5rem" }}>
      <TestBankDetails/>
      <Tabs defaultActiveKey="multiplechoice" id="tabs">
        <Tab eventKey="multiplechoice" title="Multiple Choice">
      <Form style={formStyle}>
         <QuestionDetails />
        <Form.Label><h3><b>Options</b></h3></Form.Label>
        <Form.Label className="float-right">Correct?</Form.Label>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Option 1</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Option 2</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Option 3</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Option 4</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Option 5</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Button type="submit" className="mr-3" href="/edittestbank">Save and Quit</Button>
      <Button className="mr-3" href="/addquestion">Duplicate Question</Button>
      <Button className="mr-3" href="/edittestbank">Quit without Saving</Button>
      </Form>
    </Tab>
    <Tab eventKey="shortanswer" title="Short Answer">
      <Form style={formStyle}>
         <QuestionDetails />
        <Form.Label><h3><b>Correct Answers</b></h3></Form.Label>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Answer 1</Form.Label>
        <Col sm={11}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Answer 2</Form.Label>
        <Col sm={11}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Answer 3</Form.Label>
        <Col sm={11}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Answer 4</Form.Label>
        <Col sm={11}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={1}>Answer 5</Form.Label>
        <Col sm={11}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Button type="submit" className="mr-3">Save and Quit</Button>
      <Button className="mr-3">Add Another Question</Button>
      <Button className="mr-3">Duplicate Question</Button>
      <Button className="mr-3">Quit without Saving</Button>
      </Form>
      </Tab>
      </Tabs>
    </Container>
  </DashboardLayout>
};
