import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function CopyTestBankQuestions() {

    var columns:any = [
        {title: 'Test Bank Name', field: 'name'},
        {title: 'Description', field: 'description'},
        {title: 'Date Created', field: 'dateCreated', type: 'date' },
        {title: 'Date Last Modified', field: 'dateLastModified', type: 'date' },
    ];

    var data:any = [
      { name: 'CSAstrings', description: 'CSA Strings from Barron', dateCreated: '07/05/20', dateLastModified: '07/07/20'},
      { name: 'CSAstrings2', description: 'CSA Strings from Princeton Review', dateCreated: '07/07/20', dateLastModified: '07/07/20'},
      { name: 'ECSbebras', description: 'ECS Bebras 2019', dateCreated: '08/11/20', dateLastModified: '07/31/20'},
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Copy Questions from Another Testbank"
      columns={columns}
      data={data}
      //Change onClick: (event) once create-a-test page completed.
      actions={[
        {
          icon: 'library_add_check',
          tooltip: 'Select Questions',
          onClick: (event) => window.location.href='/copytestbankquestions'
        },
        {
          icon: 'library_add',
          tooltip: 'Copy All Questions',
          onClick: (event) => window.location.href='/copytestbankquestions'
        },
      ]}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        pageSize: 6,
        pageSizeOptions: [],
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
