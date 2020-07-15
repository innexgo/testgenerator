import React from 'react';
import TestBankDetails from '../components/TestBankDetails';
import { Container, Form, Col, Button, Row } from 'react-bootstrap';
import CSS from 'csstype';

export default function AddQuestion(){
  const formStyle: CSS.Properties = {
    backgroundColor: 'white',
    padding: '2%',
  };
  return (
    <Container fluid>
      <TestBankDetails canEdit={false}/>
      <Form style={formStyle}>
              <Form.Label><h1><b>Add Question</b></h1></Form.Label>
        <Form.Row>
          <Col>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>Difficulty</Form.Label>
              <Col sm={9}>
                <Form.Control as="select">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>Type</Form.Label>
              <Col sm={9}>
                <Form.Control as="select">
                  <option>Multiple Choice</option>
                  <option>Short Answer</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>
          
          <Col>
            <Form.Group as={Row}>
              <Form.Label column sm={3}># Points</Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="1" />
              </Col>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col sm={9}>
            <Form.Group>
              <Form.Label>Question</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group>
              <Form.File label="Image" />
            </Form.Group>
          </Col>
          </Form.Row>
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
        <Form.Label column sm={1}>Option 4</Form.Label>
        <Col sm={10}>
          <Form.Control type="text" />
        </Col>
        <Col sm={1}>
          <Form.Check className="float-right" type='checkbox' />
        </Col>
      </Form.Group>
      <Button type="submit" className="mr-3">Save and Quit</Button>
      <Button className="mr-3">Add Another Question</Button>
      <Button className="mr-3">Duplicate Question</Button>
      <Button className="mr-3">Quit without Saving</Button>
      </Form>
    </Container>
  );
}
