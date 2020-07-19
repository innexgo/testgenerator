import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestSelection() {

    var columns:any = [
        {title: 'Test Name', field: 'name'},
        {title: 'Test Description', field: 'description'},
        {title: 'Test Bank', field: 'testBank'},
        {title: 'Easy Questions', field: 'easyQuestions'},
        {title: 'Medium Questions', field: 'mediumQuestions'},
        {title: 'Hard Questions', field: 'hardQuestions'},
    ];

    var data:any = [
      { name: 'APCS-A unit 1 Test', description: 'CSA ch 4 - 1D arrays', testBank: 'CSA arrays', easyQuestions: '12', mediumQuestions: '5', hardQuestions: '0'}
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Selected Test"
    style={{marginBottom: '2rem',}}
      columns={columns}
      data={data}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        search: false,
        paging: false,
        rowStyle: rowData => ({
          backgroundColor: (selectedRowID === rowData.tableData.id) ? '#EEE' : '#FFF'
        }),
        headerStyle: {
          backgroundColor: '#121212',
          color: '#FFF',
        }
      }}
    />
  );
}
