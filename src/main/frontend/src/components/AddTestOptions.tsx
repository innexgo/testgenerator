import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import {Container, Row, Col, InputGroup, FormControl, Dropdown, DropdownButton} from 'react-bootstrap';
import CSS from 'csstype';

export default function AddQuestion(props: any) {

  return (
    <Container fluid style={{ marginTop: "1.5rem" }}>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Test Name</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Time Length</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
            <InputGroup.Append>
              <InputGroup.Text>Hours</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>

        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Test Description</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Number of Test Versions</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Number of Easy Questions</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
            </InputGroup>
        </Col>

        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Number of Medium Questions</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
            </InputGroup>
        </Col>

        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend><InputGroup.Text>Number of Hard Questions</InputGroup.Text></InputGroup.Prepend>
            <FormControl />
            </InputGroup>
        </Col>
      </Row>

      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Prepend><InputGroup.Checkbox aria-label="Checkbox for following text input" /></InputGroup.Prepend>
          <FormControl readOnly placeholder="Randomize Multiple Choice Questions?" aria-label="Randomize Multiple Choice Questions?" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend><InputGroup.Checkbox aria-label="Checkbox for following text input" /></InputGroup.Prepend>
          <FormControl readOnly placeholder="Randomize Easy Questions?" aria-label="Randomize Easy Questions?" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend><InputGroup.Checkbox aria-label="Checkbox for following text input" /></InputGroup.Prepend>
          <FormControl readOnly placeholder="Randomize Medium Questions?" aria-label="Randomize Medium Questions?" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend><InputGroup.Checkbox aria-label="Checkbox for following text input" /></InputGroup.Prepend>
          <FormControl readOnly placeholder="Randomize Hard Questions?" aria-label="Randomize Hard Questions?" />
        </InputGroup>
      </Row>

    </Container>
  );
}
