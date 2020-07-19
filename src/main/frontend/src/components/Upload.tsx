import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestSelection() {

    var columns:any = [
        {title: 'Requirements', field: 'requirements'},
    ];

    var data:any = [
      {requirements: 'Upload a .csv/.xlsx (Microsoft Excel) file.'},
      {requirements: 'If you are uploading classes, format the data as such: <b>Class Name, Course, Description</b>'},
      {requirements: 'Upload a .csv/.xlsx (Microsoft Excel) file.'}
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Upload Class/Student Data"
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