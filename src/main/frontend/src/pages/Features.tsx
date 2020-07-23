import React from 'react';
import ExternalLayout from '../components/ExternalLayout';
import {Table} from 'react-bootstrap';

const listStyle = {
  width: '60%',
  marginLeft: '8%', /*also used in the first marginRight for the pricing table*/
  display: 'fixed'
};

const featuresTable = { /*formerly tabStyle*/
  margin: '-1%', 
  width: '140%'
}

const sideBarBox = {
  background: '#d3def5', 
  margin: '3%', 
  borderRadius: '20px', 
  boxShadow: '5px 7px #8c8c8c'
}

const sideBarText = {
  marginTop: '4%',
  marginLeft: '3%',
  marginRight: '3%'
};

function Features() {
  return(
    <ExternalLayout>
      <h1 style={{textAlign: 'center', marginBottom: '2%', fontSize: '60px'}}>Features</h1>
      <p style={{textAlign: 'center', fontSize: '18px'}}>Test Generator comes with a variety of features for creating, assigning, storing, &#38; analyzing tests. </p>
      <br/><br/>

      <div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'white'}}>
        <div style={{margin: '0%'}}>
          <br/><br/>
          <div style={listStyle}>
            <h2 style={{marginLeft: '55%'}}>Tests</h2>
            <br />
            <Table borderless hover style={featuresTable}>
              <tbody>
                <tr>
                  <td>Multiple versions of tests</td>
                  <td>Each test you make will be made into several versions with the questions in a randomized order.</td>
                </tr>
                <tr>
                  <td>Variety of question features</td>
                  <td>A variety of question types are avaliable, such as multiple-choice and short-answer.</td>
                </tr>
                <tr>
                  <td>Quick grading</td>
                  <td>Questions with specific answers will be automatically graded and added to the score.</td>
                </tr>
                <tr>
                  <td>Easily assign to classes &#38; students</td>
                  <td>Tests can be assigned to your classes, to certain students, or both.</td>
                </tr>
              </tbody>
            </Table>
            <br /><br />

            <h2 style={{textAlign: 'center', marginLeft: '30%'}}>Reports &#38; Analytics</h2>
            <br/>
            <Table borderless hover style={featuresTable}>
              <tbody>
                <tr>
                  <td>Interactive graphs</td>
                  <td>Numerous graphs and charts allow you to see grade trends, individual student performance, and compare your classes.</td>
                </tr>
                <tr>
                  <td>Analytics for students &#38; classes</td>
                  <td>TG automatically analyzes data for students &#38; classes, providing ranks, averages, and indicating students that may need help.</td>
                </tr>
                <tr>
                  <td>Send reports to students</td>
                  <td>Quickly send scores to all students (or individuals!) after a test.</td>
                </tr> 
              </tbody>
            </Table>
            <br/><br/>
          </div>
        </div>

        <div style={{width: '40%', display: 'inline', marginRight: '8%'}}>
          <br/>
          <div style={sideBarBox}>
            <div style={sideBarText}>
              <br/>
              <h3>What features do I get at each level of pricing?</h3>
              <br/><br/>
              <p>TG comes with two <a href="Pricing.tsx">pricing options</a>, Basic &#38; Premium. Basic allows for general test creation, while Premium has a wider variety of quesiton options, analytics, and easier organization.</p>
            
              <Table hover>
                <tbody>
                  <tr style={{width:'60%'}}>
                    <td></td>
                    <td>Basic</td>
                    <td>Premium</td>
                  </tr>
                  <tr>
                    <td>Create &#38; generate tests</td>
                    <td>&#10003;</td>
                    <td>&#10003;</td>
                  </tr>
                  <tr>
                    <td>Automatic grading of questions</td>
                    <td>&#10003;</td>
                    <td>&#10003;</td>
                  </tr>
                  <tr>
                    <td>Unlimited questions</td>
                    <td>&#10003;</td>
                    <td>&#10007;</td>
                  </tr>
                  <tr>
                    <td>Multiple test versions</td>
                    <td>&#10003;</td>
                    <td>&#10007;</td>
                  </tr>
                  <tr>
                    <td>Analytics &#38; graphs</td>
                    <td>&#10003;</td>
                    <td>&#10007;</td>
                  </tr>
                  <tr>
                    <td>Send results to students</td>
                    <td>&#10003;</td>
                    <td>&#10007;</td>
                  </tr>
                  <br/>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
        <br/><br/>
      </div>
    </ExternalLayout>
);
}

export default Features;
