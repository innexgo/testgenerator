import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function SelectStudentsForTest() {
  {/*
  state will be implemented with redux, but its not necessary yet since we have fictitious data. Once we add data from db we can add state again.
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const [state, setState] = React.useState({
  });
  */}

      // Replace fictitious data w/data from SQL
  const {useState} = React;

  const columns:any = [
        {title: 'Period', field: 'period', defaultGroupOrder: 0},
        {title: 'Last Name', field: 'surname'},
        {title: 'First Name', field: 'name'},
        {title: 'School Student ID', field: 'id'},
        {title: 'Email', field: 'email'},
  ];

  const [data, setData] = useState([
      {period: '1', surname: 'Anderson', name: 'Amy', id: '345666', email:'andersonA@gmail.com'},
      {period: '1', surname: 'Fitch', name: 'Kate', id: '234233', email:'kate.fitch@yahoo.com'},
      {period: '2', surname: 'Tran', name: 'Barbara', id: '235421', email:'happyFace@gmail.com'},
      {period: '4', surname: 'Williams', name: 'Harry', id: '456322', email:'harryW@gmail.com'},
  ]);

  var selectedRowID: any =null;


  return (
    <MaterialTable title="Select Students for a Test"
      columns={columns}
      data={data}
      //Change onClick: (event) once create-a-test page completed.
      actions={[
        {
          icon: 'schedule',
          tooltip: 'Schedule Test for Select Students',
          onClick: (event) => window.location.href='/selectstudentsfortest'
        },
      ]}
      options={{
        pageSize: 8,
        pageSizeOptions: [],
        selection: true,
        grouping: true,
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
