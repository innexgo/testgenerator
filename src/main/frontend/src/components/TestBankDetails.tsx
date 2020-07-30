import React from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

export default function TestBankDetails(props:any){
  return (
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Test Bank Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              readOnly
              defaultValue='APCS-A unit 1'//plug in actual test name
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
              readOnly
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
  );
}
