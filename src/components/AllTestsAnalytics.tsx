import React, { PureComponent } from 'react';
import {Col, Row} from 'react-bootstrap';
import {ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';

// Replace fictitious data w/data from SQL
const data:any = [
  { name: '90%+', value: 15/30 },
  { name: '80-89%', value: 10/30 },
  { name: '70-79%', value: 2/30 },
  { name: '60-69%', value: 2/30 },
  { name: '59%-', value: 1/30 },
];

const colors:string[] = ['#002600','#4ca64c', '#e5e500', '#FFBB28', '#cc2900'];

export default class alltests_analytics extends PureComponent {
  static jsfiddleUrl:string = '//jsfiddle.net/alidingling/6okmehja/';

  render() {
    return (
      <Col>
      <Row><h4 style={{padding: '0.75rem'}}>Average Grade (%):</h4></Row>
      <Row>
        <ResponsiveContainer height={325} width="100%">
          <PieChart>
            <Pie dataKey="value" data={data} outerRadius={90}>
            {
              data.map((entry:any, index:any) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
            }
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36}/>
        </PieChart>
        </ResponsiveContainer>
      </Row>
      </Col>
    );
  }
}

