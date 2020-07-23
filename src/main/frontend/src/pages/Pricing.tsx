import React from 'react';
import ExternalLayout from '../components/ExternalLayout';

const firsthalf = { /*the outside of the thing*/
  width: '50%',
  display: 'fixed'
};

const secondhalf = {
  width: '50%',
  display: 'inline'
};

const boxOne = {
  backgroundColor: '#e6e7e8',
  borderRadius: '20px',
  boxShadow: '5px 7px #990000ff',
  marginLeft: '18%',
  marginRight: '5%'
};

const boxTwo = {
  backgroundColor: '#e6e7e8',
  borderRadius: '20px',
  boxShadow: '5px 7px #daa520ff',
  marginLeft: '5%',
  marginRight: '18%'
};

const innerText = {
  marginLeft: '5%',
  marginRight: '5%'
};

function Pricing() {
  return(
    <div style={{backgroundColor: '#f2f3f4'}}>
      <ExternalLayout>
        <h1 style={{textAlign: 'center'}}>Pricing</h1>
        <br/><br/>
          <p style={{marginLeft: '16%', marginRight: '16%', fontSize: '18px'}}>TG has both basic &#38; premium plans, 
          both of which are affordable. While the basic plan has general test
          making, assigning, and grading features, the premium plan offers advanced analytics,
          including graphs &#38; student ranking. Learn about each plan to choose the one that 
          fits your teaching needs.
          </p> <br/>
          
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={firsthalf}>
              <div style={boxOne}>
                <div style={innerText}>
                  <br/>
                  <h3>Basic</h3>
                  <p>$1 a month</p>
                  <ul>
                    <li style={{margin: '5px 0'}}>&#10003; Create tests</li>
                    <li style={{margin: '5px 0'}}>&#10003; Automatic grading of questions</li>
                    <li style={{margin: '5px 0'}}>&#10003; Store &#38; share tests</li>
                    <li style={{margin: '5px 0'}}>&#10007; All question types &#38; unlimited usage</li>
                    <li style={{margin: '5px 0'}}>&#10007; Analytics</li>
                    <li style={{margin: '5px 0'}}>&#10007; Send reports to students</li>
                  </ul>
                  <br/>
                </div>
              </div>
            </div>

            <div style={secondhalf}>
              <div style={boxTwo}>
                <div style={innerText}>
                  <br/>
                  <h3>Premium</h3>
                  <p>$3 a month</p>
                  <ul>
                    <li style={{margin: '5px 0'}}>&#10003; All the feautres of Basic</li>
                    <li style={{margin: '5px 0'}}>&#10003; Interactive graphs &#38; charts</li>
                    <li style={{margin: '5px 0'}}>&#10003; Several question types</li>
                    <li style={{margin: '5px 0'}}>&#10003; Different versions of tests</li>
                    <li style={{margin: '5px 0'}}>&#10003; Unlimited questions &#38; tests</li>
                    <li style={{margin: '5px 0'}}>&#10003; Send reports to students</li>
                  </ul>
                  <br/>
                </div>
              </div>
            </div>
          </div>
      </ExternalLayout>
    </div>
);
}

export default Pricing;
