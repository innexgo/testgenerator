import React from 'react';
import ReactDOM from 'react-dom';
import DashboardLayout from '../components/DashboardLayout';
import {Tabs, Tab, Container} from 'react-bootstrap';
import ReportsCurrentClasses from '../components/ReportsCurrentClasses';
import ReportsCurrentTests from '../components/ReportsCurrentTests';

function UpdateInformation(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div className="App" style={{ margin: "1rem", marginTop: "1.5rem", }}>
      <ReportsCurrentClasses />
      <ReportsCurrentTests/>
    </div>
  </DashboardLayout>
};

export default UpdateInformation;
