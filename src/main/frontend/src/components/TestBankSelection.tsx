import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function CopyTestBankQuestions() {

  var columns:any = [
        {title: 'Test Bank Name', field: 'name'},
        {title: 'Description', field: 'description'},
        {title: 'Date Created', field: 'dateCreated', type: 'date' },
        {title: 'Date Last Modified', field: 'dateLastModified', type: 'date' },
        {title: '# Easy', field: 'numEasy'},
        {title: '# Medium', field: 'numMedium'},
        {title: '# Hard', field: 'numHard'},
    ];

  var data:any = [
      { name: 'CSAch4', description: 'CSA Barron ch 4', dateCreated: '08/05/20', dateLastModified: '09/03/20', numEasy: '23', numMedium: '12', numHard: '6' },
    ];

  var selectedRowID: any =null;

  return (
    <MaterialTable title="Selected Test Bank"
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
