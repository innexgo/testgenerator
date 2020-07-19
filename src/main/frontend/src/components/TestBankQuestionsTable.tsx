import React from 'react';
import MaterialTable from 'material-table'
import './alltest_icons.css'
import { ListGroup } from 'react-bootstrap';


export default function TestBankQuestionsTable() {
        var columns:any = [
        {title: 'Difficulty', field: 'difficulty'},
        {title: 'question', field: 'question'},
      ];
      var data:any = [
      { difficulty: 'Easy', question: '___________ Monitors user activity on Internet and transmit that information in the background to someone else.'},
      { difficulty: 'Medium', question: 'Firewall is a type of ___________'},
      { difficulty: 'Hard', question: 'Viruses are _______'},
      ];
      var selectedRowID: any =null;

      return (
        <MaterialTable title="Questions"
        columns={columns}
        data={data}
        actions={[
          {
            icon: 'add',
            tooltip: 'New Question',
            isFreeAction: true,
            onClick: (event) => window.location.href='/addquestion'
          },
          {
            icon: 'edit',
            tooltip: 'Edit',
            onClick: (event) => window.location.href='/edittestbank',
          },
          {
            icon: 'content_copy',
            tooltip: 'Duplicate',
            onClick: (event) => window.location.href='/edittestbank',
          },
          {
            icon: 'archive',
            tooltip: 'Archive',
            onClick: (event) => window.location.href='/edittestbank'
          },
        ]}
      onRowClick={(
        (evt, selectedRow: any) => selectedRowID = selectedRow?.tableData?.id
      )}
      detailPanel={rowData => {  
        return (    
        <div>
          <ListGroup as="ul">
            <ListGroup.Item as="li" variant="success">
              Spam
            </ListGroup.Item>
            <ListGroup.Item as="li"> Malware </ListGroup.Item>
            <ListGroup.Item as="li"> Virus </ListGroup.Item>
            <ListGroup.Item as="li"> Spyware </ListGroup.Item>
          </ListGroup>
          </div>
        );
      }}
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
      


