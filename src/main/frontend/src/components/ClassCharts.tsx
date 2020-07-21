import React, { PureComponent } from 'react';
import {Card} from 'react-bootstrap';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label} from 'recharts';

const score = [
  {name: '0-10', AP_CSA_1: 0, AP_CSA_4: 0},
  {name: '10-20', AP_CSA_1: 0, AP_CSA_4: 1},
  {name: '20-30', AP_CSA_1: 0, AP_CSA_4: 2},
  {name: '30-40', AP_CSA_1: 4, AP_CSA_4: 5},
  {name: '40-50', AP_CSA_1: 2, AP_CSA_4: 4},
  {name: '50-60', AP_CSA_1: 6, AP_CSA_4: 5},
  {name: '60-70', AP_CSA_1: 7, AP_CSA_4: 5},
  {name: '70-80', AP_CSA_1: 6, AP_CSA_4: 5},
  {name: '80-90', AP_CSA_1: 2, AP_CSA_4: 2},
  {name: '90-100', AP_CSA_1: 5, AP_CSA_4: 3},
];

const quiz = [
  {name: 'Quiz 1', AP_CSA_1: 65, AP_CSA_4: 71},
  {name: 'Quiz 2', AP_CSA_1: 72, AP_CSA_4: 68},
  {name: 'Quiz 3', AP_CSA_1: 79, AP_CSA_4: 81},
  {name: 'Test 1', AP_CSA_1: 68, AP_CSA_4: 74},
  {name: 'Quiz 4', AP_CSA_1: 78, AP_CSA_4: 76},
];

export default class TestCharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <Card>
        <div style={{width: '100%', height: 300}}>
          <h5 style={{padding: '1.35rem',}}>Average Score Distribution</h5>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={score}
              margin={{top: 5, right: 30, left: 20, bottom: 85,}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value='Score (%)' position='insideBottomRight' offset={-5} style={{textAnchor: 'end',}} />
              </XAxis>
              <YAxis>
                <Label angle={-90} value='# of Students' position='insideLeft' style={{textAnchor: 'middle'}} />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="AP_CSA_1" fill="#F692BC" />
              <Bar dataKey="AP_CSA_4" fill="#6891C3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{width: '100%', height: 300}}>
          <h5 style={{padding: '1.35rem',}}>Assessment Analysis</h5>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={quiz}
              margin={{top: 5, right: 30, left: 20, bottom: 85,}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value='Assessment Name' position='insideBottomRight' offset={-5} style={{textAnchor: 'end',}} />
              </XAxis>
              <YAxis>
                <Label angle={-90} value='Correct (%)' position='insideLeft' style={{textAnchor: 'middle'}} />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="AP_CSA_1" fill="#F692BC" />
              <Bar dataKey="AP_CSA_4" fill="#6891C3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }
}
