import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestStatistics() {

    var columns:any = [
        {title: 'Class', field: 'class'},
        {title: 'Range (%)', field: 'range'},
        {title: 'Mean (%)', field: 'mean'},
        {title: 'Median (%)', field: 'median'},
        {title: 'Standard Deviation (%)', field: 'standardDeviation'},
    ];

    // For Class Report, ONLY HAVE 1. For Test Report, HAVE ALL. 
    var data:any = [
      {class: '1 APCS-A', range: '31-99', mean: '62', median: '68', standardDeviation: '9'},
      {class: '4 APCS-A', range: '24-99', mean: '54', median: '60', standardDeviation: '14'},
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Class Statistics"
      style={{marginTop: '1.5rem'}}
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
