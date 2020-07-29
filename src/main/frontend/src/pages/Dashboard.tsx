import * as React from "react";

import DashboardLayout from '../components/DashboardLayout';

function Dashboard(props: AuthenticatedComponentProps) {
  return <DashboardLayout {...props}>
    <div style={{ margin: "auto" }}>
      <p> Successfully logged in! </p>
      <a href="/testreport">Go to test report</a>
      <a href="/testbanks">Go to test banks</a>
    </div>
  </DashboardLayout>
};

export default Dashboard;
