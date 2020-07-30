import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from '../components/DashboardLayout';
import {Tabs, Tab, Container} from 'react-bootstrap';
import UpdateClasses from '../components/UpdateClasses';
import UpdateStudents from '../components/UpdateStudents';
import Upload from '../components/Upload';

function UpdateInformation(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ marginTop: "1.5em" }}>
      <Container fluid>
          <Tabs defaultActiveKey="updateClasses">
            <Tab eventKey="updateClasses" title="Update Classes">
              <UpdateClasses />
            </Tab>
            <Tab eventKey="updateStudents" title="Update Students">
              <UpdateStudents />
            </Tab>
            <Tab eventKey="upload" title="Upload Classes/Students">
              <Upload />
            </Tab>
          </Tabs>
      </Container>
    </div>
  </DashboardLayout>
};

export default UpdateInformation;
