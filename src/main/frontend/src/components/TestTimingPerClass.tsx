import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function TestTimingPerClass() {
  {/*
  state will be implemented with redux, but its not necessary yet since we have fictitious data. Once we add data from db we can add state again.
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
  const [state, setState] = React.useState({
  });
  */}

      // Replace fictitious data w/data from SQL
  const {useState} = React;

  const columns:any = [
        {title: 'Class Name', field: 'name'},
        {title: 'Start Date & Time', field: 'startDate', type: 'datetime'},
        {title: 'Time Limit (Minutes)', field: 'timeLimit', type: 'numeric'},
  ];

  const [data, setData] = useState([
      {name: '1-APCS-A', startDate: '', timeLimit: '30'},
      {name: '2-APCS-A', startDate: '', timeLimit: '30'},
      {name: '4-APCS-A', startDate: '', timeLimit: '25'},
  ]);

  var selectedRowID: any =null;


  return (
    <MaterialTable title="Set Test Timing"
      columns={columns}
      data={data}
      //Change onClick: (event) once create-a-test page completed.
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData:any, oldData:any) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate:any = [...data];
              const index:any = oldData?.tableData?.id;
              dataUpdate[index] = newData;
               setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: (oldData:any) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete:any = [...data];
              const index:any = oldData?.tableData?.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve()
            }, 1000)
          }),
      }}
      options={{
        search: false,
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
