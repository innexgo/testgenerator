import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestStatistics() {

  var columns:any = [
    {title: 'Test Bank Name', field: 'name'},
    {title: 'Description', field: 'description'},
    {title: 'Date Created', field: 'creationDate', type: 'date'},
    {title: '# Easy', field: 'numEasy'},
    {title: '# Medium', field: 'numMedium'},
    {title: '# Hard', field: 'numHard'},
    {title: 'Used', field: 'used'},
    ];
    //fake data until backend is set up
    var data:any = [
      { name: 'CSAstrings', description: 'CSA Strings from Barron', creationDate: '07/05/20', numEasy: 20, numMedium: 0, numHard: 5, used: 'no' },
      { name: 'CSAstrings2', description: 'CSA String from Princeton Review', creationDate: '07/07/20', numEasy: 25, numMedium: 0, numHard: 0, used:'yes'},
      { name: 'ECSbebras', description: 'ECS Bebras 2019', creationDate: '08/11/20', numEasy: 20, numMedium: 10, numHard: 5, used:'yes'},
    ];
    var selectedRowID: any = null;

  return (
    <MaterialTable title="Test Banks"
    style={{ margin: "1rem"}}
    columns={columns}
    data={data}
    actions={[
      {
        icon: 'check_circle',
        tooltip: 'Select Test Bank',
        onClick: (event) => window.location.href='/addtest'
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
