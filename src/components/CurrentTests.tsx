import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function CurrentTests() {
  {/*
  state will be implemented with redux, but its not necessary yet since we have fictitious data. Once we add data from db we can add state again.
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const [state, setState] = React.useState({

    // Replace fictitious data w/data from SQL
    data: [
      { name: 'Diagnostic Test', description: 'First quiz to gauge knowledge.', creationDate: '08/19/20', proctoringDate: '08/20/20', meanScore: '82%' },
      { name: 'Ch. 1 Test', description: 'First test from textbook.', creationDate: '08/30/20', proctoringDate: '08/31/20', meanScore: '79%' },
    ],
  });
  */}
      var columns:any = [
        {title: 'Test Name', field: 'name'},
        {title: 'Description', field: 'description'},
        {title: 'Test Bank', field: 'testBank'},
        {title: 'Date Created', field: 'dateCreated', type: 'date' },
        {title: 'Date Last Modified', field: 'dateLastModified', type: 'date' },
        {title: 'Date Last Scheduled', field: 'dateLastScheduled', type: 'date' },
      ];
      var data:any = [
      { name: 'CSAtest4', description: 'CSA L4', testBank: 'CSA 5', dateCreated: '09/05/20', dateLastModified: '09/05/20', dateLastScheduled: '' },
      { name: 'CSAtest3', description: 'CSA L3 + review from L2', testBank: 'CSA 3', dateCreated: '08/07/20', dateLastModified: '08/11/20', dateLastScheduled: '09/01/20' },
      { name: 'CSAtest2Review', description: 'Review from L2', testBank: 'CSA 3', dateCreated: '08/15/20', dateLastModified: '08/21/20', dateLastScheduled: '09/01/20' },
      { name: 'CSAtest2', description: 'CSA L2', testBank: 'CSA 2', dateCreated: '08/07/20', dateLastModified: '08/11/20', dateLastScheduled: '08/28/20' },
      { name: 'CSAtest1', description: 'CSA L1', testBank: 'CSA 1', dateCreated: '08/07/20', dateLastModified: '08/11/20', dateLastScheduled: '08/25/20' },
      { name: 'CSAtestpre-req', description: 'Prerequisites', testBank: 'CSA Preq', dateCreated: '08/01/20', dateLastModified: '08/02/20', dateLastScheduled: '08/17/20' },
      ];
      var selectedRowID: any =null;


  return (
    <MaterialTable title="Current Tests"
      columns={columns}
      data={data}
      //Change onClick: (event) once create-a-test page completed.
      actions={[
        {
          icon: 'add',
          tooltip: 'New Test',
          isFreeAction: true,
          onClick: (event) => window.location.href='/testreport'
        },
        {
          icon: 'edit',
          tooltip: 'Edit',
          onClick: (event) => window.location.href='/testreport'
        },
        {
          icon: 'archive',
          tooltip: 'Archive',
          onClick: (event) => window.location.href='/testreport'
        },
      ]}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        rowStyle: rowData => ({
          backgroundColor: (selectedRowID === rowData.tableData.id) ? '#EEE' : '#FFF'
        }),
        filtering: true,
        headerStyle: {
          backgroundColor: '#990000',
          color: '#FFF',
        }
      }}
    />
  );
}
