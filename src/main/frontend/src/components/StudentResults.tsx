import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function StudentResults() {

    var columns:any = [
        {title: 'Last Name', field: 'lastName'},
        {title: 'First Name', field: 'firstName'},
        {title: 'Score (%)', field: 'score'},
        {title: 'Rank', field: 'rank'},
    ];

    var data:any = [
      {lastName: 'Smith', firstName: 'Emma', score: '99', rank: '1'},
      {lastName: 'Johnson', firstName: 'Olivia', score: '89', rank: '2'},
      {lastName: 'Williams', firstName: 'Ava', score: '88', rank: '3'}
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Student Results"
      style={{marginBottom: '2rem'}}
      columns={columns}
      data={data}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        pageSize: 5,
        pageSizeOptions: [],
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
