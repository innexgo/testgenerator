import React from 'react';
import {Card, Container, ListGroup} from 'react-bootstrap';

export default function Upload() {
  return (
    <Container fluid>
      <Card>
        <Card.Header>Innexgo Test Generator allows you to upload student and/or class data to our system as an alternative to manual input.</Card.Header>
        <Card.Body>
          <Card.Title>Requirements:</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Upload a .csv/.xlsx (Microsoft Excel) file.</ListGroup.Item>
            <ListGroup.Item>If you are uploading classes, format the data as such: <b>Class Name, Course, Description</b></ListGroup.Item>
            <ListGroup.Item>If you are uploading students, format the data as such: <b>Period, Last Name, First Name, School Student ID, Email</b></ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
