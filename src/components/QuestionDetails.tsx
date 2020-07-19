import React from 'react';
import { Form, Col, Row, } from 'react-bootstrap';

export default function QuestionDetails(){
  return(
  <>
              <Form.Label><h1><b>Add Question</b></h1></Form.Label>
        <Form.Row>
          <Col sm={4}>
            <Form.Group as={Row} className="float-right">
              <Form.Label column >Difficulty</Form.Label>
              <Col>
                <Form.Control as="select">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Col>
  <Col sm={2}></Col>
          
          <Col sm={4}>
            <Form.Group as={Row} className="float-left">
              <Form.Label column># Points</Form.Label>
              <Col>
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
          </>
  );
}
