import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function AllTests() {
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
        {title: 'Creation Date', field: 'creationDate', type: 'date'},
        {title: 'Proctoring Date', field: 'proctoringDate', type: 'date' },
        {title: 'Last Emailed Date', field: 'lastemailedDate', type: 'date' },
        {title: 'Last Graded Date', field: 'lasteditDate', type: 'date' },
        {title: 'Average Score (%)', field: 'meanScore', type: 'percent' },
      ];
      var data:any = [
      { name: 'Diagnostic Test', description: 'First quiz to gauge knowledge.', creationDate: '08/19/20', proctoringDate: '08/20/20', meanScore: '82%' },
      { name: 'Ch. 1 Test', description: 'First test from textbook.', creationDate: '08/30/20', proctoringDate: '08/31/20', meanScore: '79%' },
      ];
      var selectedRowID: any =null;
      

  return (
    <MaterialTable title="All Tests"
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
        //Make dynamic to chart(s).
        {
          icon: 'analytics',
          tooltip: 'Quick Data',
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

