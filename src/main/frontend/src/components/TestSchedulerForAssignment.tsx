import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestSchedulerForAssignment() {

    var columns:any = [
        {title: 'Class', field: 'name'},
        {title: 'Scheduled Test Start Date/Time', field: 'dateStart', type: 'datetime' },
        {title: 'Scheduled Test End Date/Time', field: 'dateEnd', type: 'datetime' },
        {title: 'Date Last Graded', field: 'dateLastGraded', type: 'date' },
        {title: 'Date Last Emailed', field: 'dateLastEmailed', type: 'date' },
    ];

    var data:any = [
      { name: '1 APCS-A', dateStart: '09/05/20 09:30 a.m.', dateEnd: '09/05/20 10:20 a.m.', dateLastGraded: '09/05/20', dateLastEmailed: '09/06/20'},
      { name: '3 APCS-A', dateStart: '09/05/20 11:00 a.m.', dateEnd: '09/05/20 11:50 a.m.', dateLastGraded: '09/05/20', dateLastEmailed: ''},
      { name: '5 APCS-A', dateStart: '', dateEnd: '', dateLastGraded: '', dateLastEmailed: ''},
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Schedule Test for Classes"
      columns={columns}
      data={data}
      //Change onClick: (event) once create-a-test page completed.
      actions={[
        {
          icon: 'schedule',
          tooltip: 'Schedule for Selected Students',
          onClick: (event) => window.location.href='/studentstotest'
        },
      ]}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        selection: true,
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
