import React from 'react';
import MaterialTable from 'material-table';
import './alltest_icons.css';

export default function CopyTestBankQuestions() {

    var columns:any = [
        {title: 'Question', field: 'question'},
        {title: 'Answer Choices', field: 'answers'},
        {title: 'Difficulty', field: 'difficulty'},
        {title: 'Type', field: 'type'},
    ];

    var data:any = [
      {difficulty: 'Easy', type:'Multiple Choice', question: '__________ monitors user activity on Internet and transmit that information in the background to someone else.', answers: 'A. spam, B. malware, C. virus, D. spyware, E. none of the above '},
      {difficulty: 'Easy', type:'Short Answer', question: 'Firewall is a type of __________ .​​'},
      {difficulty: 'Medium', type:'Short Answer', question: 'Unsolicited commercial email is known as __________ .'},
      {difficulty: 'Medium', type:'Short Answer', question: 'Viruses are _________ .'},
    ];

    var selectedRowID: any =null;

  return (
    <MaterialTable title="Questions in Test Bank"
      columns={columns}
      data={data}
      actions={[
        {
          icon: 'add_box',
          tooltip: 'New Question',
          isFreeAction: true,
          onClick: (event) => window.location.href='/edittestbank'
        },
        {
          icon: 'library_add',
          tooltip: 'Copy Questions from Another Test Bank',
          isFreeAction: true,
          onClick: (event) => window.location.href='/edittestbank'
        },
        {
          icon: 'edit',
          tooltip: 'Edit Question',
          onClick: (event) => window.location.href='/edittestbank'
        },
        {
          icon: 'content_copy',
          tooltip: 'Duplicate Question',
          onClick: (event) => window.location.href='/edittestbank'
        },
        {
          icon: 'delete',
          tooltip: 'Delete Question',
          onClick: (event) => window.location.href='/edittestbank'
        },
      ]}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      options={{
        pageSize: 6,
        pageSizeOptions: [],
        search: false,
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
