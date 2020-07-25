import React from 'react';
import ExternalLayout from '../components/ExternalLayout';
import {Table} from 'react-bootstrap';
import featuresboxone from '../img/featuresboxone.png';

import features1 from '../img/features1.png';
import features2 from '../img/features2.png';
import features3 from '../img/features3.png';
import features4 from '../img/features4.png';
import features5 from '../img/features5.png';
import features6 from '../img/features6.png';
import features7 from '../img/features7.png';

const boxoneImage = {
  backgroundImage: `url(${featuresboxone})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  opacity: '95%',
  height: '325px'
};

const listStyle = {
  width: '60%',
  marginLeft: '8%', /*adjust marginRight in the first table if you change this!*/
  display: 'fixed'
};

const featuresTable = { /*both tables use this*/
  margin: '-1%', 
  width: '140%',
  align: 'left'
}

const sideBarBox = { /*the colored container*/
  backgroundColor: '#e6e7e8', 
  margin: '3%', 
  borderRadius: '20px', 
  boxShadow: '5px 7px #990000ff'
}

const sideBarText = {
  marginTop: '4%',
  marginLeft: '3%',
  marginRight: '3%'
};

function Features() {
  return(
    <div style={{backgroundColor: '#f2f3f4'}}>
      <ExternalLayout>
        <div style={boxoneImage}>
        <br/><br/><br/><br/><br/>
          <h1 style={{textAlign: 'center', marginBottom: '2%', color: 'white', textShadow: '2px 2px #990000ff'}}>We like to save time, too.</h1>
          <p style={{textAlign: 'center', fontSize: '21px', color: 'white', textShadow: '1px 1px #990000ff', marginLeft: '15%', marginRight: '15%'}}>Test Generator comes with a variety of features for creating, assigning, storing, &#38; analyzing tests, saving you from hours of grading &#38; figuring out what to teach.</p>
        </div>
        <br/>

        <div style={{display: 'flex', flexDirection: 'row' /*,backgroundColor: 'white'*/}}>
          <div style={{margin: '0%'}}>
            <br/><br/>
            <div style={listStyle}>
              <h2 style={{marginLeft: '58%'}}>Tests</h2>
              <br />
              <Table borderless hover style={featuresTable}>
                <tbody>
                  <tr>
                    <td style={{width: '10%'}}><img src={features1}/></td>
                    <td style={{width: '35%'}}>Multiple versions of tests</td>
                    <td style={{width: '55%'}}>Each test you make will be made into several versions with the questions in a randomized order.</td>
                  </tr>
                  <tr>
                    <td><img src={features2}/></td>
                    <td>Variety of question features</td>
                    <td>A variety of question types are avaliable, such as multiple-choice and math questions, all of which can be automatically graded.</td>
                  </tr>
                  <tr>
                    <td><img src={features3}/></td>
                    <td>Quick grading</td>
                    <td>Questions with answers inputted in creation will be automatically graded and added to the score, saving you from hours of grading.</td>
                  </tr>
                  <tr>
                    <td><img src={features4}/></td>
                    <td>Easily assign to classes &#38; students</td>
                    <td>Tests can be assigned to your classes, to certain students, or both. Assigning is flexible to what your &#38; your students' needs are.</td>
                  </tr>
                </tbody>
              </Table>
              <br /><br />

              <h2 style={{textAlign: 'center', marginLeft: '40%'}}>Reports &#38; Analytics</h2>
              <br/>
              <Table borderless hover style={featuresTable}>
                <tbody>
                  <tr>
                    <td style={{width: '10%'}}><img src={features5}/></td>
                    <td style={{width: '35%'}}>Interactive graphs</td>
                    <td style={{width: '55%'}}>A variety of graphs and charts allow you to see grade trends, individual student performance, and compare your classes. Graphs easily display what areas students &#38; and classes need help in, simplifying the planning process.</td>
                  </tr>
                  <tr>
                    <td><img src={features6}/></td>
                    <td>Analytics for students &#38; classes</td>
                    <td>TG automatically analyzes data for students &#38; classes, providing ranks, averages, and indicating students that may need help, taking out the work out of figuring out what needs to be worked on.</td>
                  </tr>
                  <tr>
                    <td><img src={features7}/></td>
                    <td>Send reports to students</td>
                    <td>Quickly send scores to all students (or individuals!) after a test. Students can see not only their score, but their performance on individual questions to help them improve &#38; review.</td>
                  </tr> 
                </tbody>
              </Table>
              <br/><br/>
            </div>
          </div>

          <div style={{width: '78%', display: 'inline', marginRight: '4%'}}>
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
    </div>
);
}

export default Features;
