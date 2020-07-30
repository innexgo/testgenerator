import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import MaterialTable from 'material-table';
import '../components/alltest_icons.css';

export default function TestBanks(props: any) {

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
    { name: 'CSAstrings', description: 'CSA Strings from Barron', creationDate: '07/05/20', numEasy: 20, numMedium: 0, numHard: 5, used: 'No' },
    { name: 'CSAstrings2', description: 'CSA String from Princeton Review', creationDate: '07/07/20', numEasy: 25, numMedium: 0, numHard: 0, used:'Yes'},
    { name: 'ECSbebras', description: 'ECS Bebras 2019', creationDate: '08/11/20', numEasy: 20, numMedium: 10, numHard: 5, used:'Yes'},
  ];
  var selectedRowID: any = null;

  return (
    <MaterialTable title="Test Banks"
    columns={columns}
    data={data}
    actions={[
      {
        icon: 'add',
        tooltip: 'New Test Bank',
        isFreeAction: true,
        onClick: (event) => window.location.href='/testbanks'
      },
      {
        icon: 'edit',
        tooltip: 'Edit',
        onClick: (event) => window.location.href='/edittestbank'
      },
      {
        icon: 'archive',
        tooltip: 'Archive',
        onClick: (event) => window.location.href='/testbanks',
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
