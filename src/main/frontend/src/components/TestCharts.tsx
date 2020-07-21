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

const missed = [
  {name: '#14', correct: 26, incorrect: 74},
  {name: '#12', correct: 31, incorrect: 69},
  {name: '#11', correct: 42, incorrect: 58},
  {name: '#8', correct: 54, incorrect: 46},
  {name: '#3', correct: 57, incorrect: 43},
  {name: '#6', correct: 61, incorrect: 39},
  {name: '#7', correct: 62, incorrect: 38},
  {name: '#9', correct: 64, incorrect: 36},
  {name: '#10', correct: 68, incorrect: 32},
  {name: '#1', correct: 69, incorrect: 31},
];

export default class TestCharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <Card>
        <div style={{width: '100%', height: 300}}>
          <h5 style={{padding: '1.35rem',}}>Score Distribution</h5>
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
          <h5 style={{padding: '1.35rem',}}>Most Missed Question</h5>
          <ResponsiveContainer>
            <BarChart
              width={500}
              height={300}
              data={missed}
              margin={{top: 5, right: 30, left: 20, bottom: 85,}}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label value='Question #' position='insideBottomRight' offset={-5} style={{textAnchor: 'end',}} />
              </XAxis>
              <YAxis>
                <Label angle={-90} value='% out of 100' position='insideLeft' style={{textAnchor: 'middle'}} />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="correct" stackId="a" fill="#82ca9d" />
              <Bar dataKey="incorrect" stackId="a" fill="#ff6961" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }
}
