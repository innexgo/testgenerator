import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestSelection() {

    var columns:any = [
        {title: 'Date', field: 'date', type: 'date'},
        {title: 'Class', field: 'class', defaultGroupOrder: 0},
        {title: 'Start Time', field: 'startTime', type: 'time'},
        {title: 'End Time', field: 'endTime', type: 'time'},
        {title: 'Students', field: 'students'},
    ];

    var data:any = [
      {date: '09/01/20', class: '1 APCS-A', startTime: '8:50', endTime: '9:40', students: '28'},
      {date: '09/02/20', class: '1 APCS-A', startTime: '3:30', endTime: '4:20', students: '4'},
      {date: '09/01/20', class: '4 APCS-A', startTime: '9:30', endTime: '10:20', students: '32'},
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="All Occurred Tests"
    style={{marginBottom: '2rem',}}
      columns={columns}
      data={data}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        selection: true,
        grouping: true,
        pageSize: 4,
        pageSizeOptions: [],
        rowStyle: rowData => ({
          backgroundColor: (selectedRowID === rowData.tableData.id) ? '#EEE' : '#FFF'
        }),
        headerStyle: {
          backgroundColor: '#990000',
          color: '#FFF',
        }
      }}
    />
  );
}
