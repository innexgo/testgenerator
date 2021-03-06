import React from 'react';
import ExternalLayout from '../components/ExternalLayout';
import pricingboxone from '../img/pricingboxone.png';

const boxoneImage = {
  backgroundImage: `url(${pricingboxone})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  opacity: '100%',
  height: '325px'
};

const firsthalf = { /*outside of those floatin boxes*/
  width: '50%',
  display: 'fixed'
};

const secondhalf = {
  width: '50%',
  display: 'inline'
};

const boxOne = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '5px 7px #990000ff', /*boxOne & boxTwo up here incase want to fix margins*/
  marginLeft: '18%',
  marginRight: '5%',
  borderStyle: 'groove',
  borderColor: '#e6e7e8'
};

const boxTwo = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  boxShadow: '5px 7px #daa520ff',
  marginLeft: '5%',
  marginRight: '18%',
  borderStyle: 'groove',
  borderColor: '#e6e7e8',
};

const innerText = {
  marginLeft: '5%',
  marginRight: '5%',
};

function Pricing() {
  return(
    <div style={{backgroundColor: '#ffffff'}}>
      <ExternalLayout>
        <div style={boxoneImage}>
          <br/><br/><br/><br/><br/>
          <h1 style={{textAlign: 'center', color: 'white'}}>Pricing</h1>
          <br/><br/>
            <p style={{fontSize: '21px', marginLeft: '16%', marginRight: '16%', textAlign: 'center', color: 'white'}}>
            TG has both a basic &#38; and premium plan,
            both at inexpensive prices for teachers &#38; schools. 
            Learn about each plan to choose the one that fits your teaching needs.
            </p>
            <br/>
        </div>

        <br/><br/><br/>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={firsthalf}>
              <div style={boxOne}>
                <div style={innerText}>
                  <br/>
                  <div style={{textAlign: 'center'}}>
                    <h2>Basic</h2>
                    <h6>$1 a month</h6><br/>
                    <ul>
                      <li style={{margin: '8px 0'}}>&#10003; Create tests with one version</li>
                      <li style={{margin: '8px 0'}}>&#10003; Automatic grading of questions</li>
                      <li style={{margin: '8px 0'}}>&#10003; Assign tests to students by email</li>
                      <li style={{margin: '8px 0'}}>&#10007; All question types &#38; unlimited usage</li>
                      <li style={{margin: '8px 0'}}>&#10007; Analytics including graphs and charts</li>
                      <li style={{margin: '8px 0'}}>&#10007; Easily send reports to students</li>
                    </ul>
                  </div>
                  <br/>
                </div>
              </div>
            </div>

            <div style={secondhalf}>
              <div style={boxTwo}>
                <div style={innerText}>
                  <br/>
                  <div style={{textAlign: 'center'}}>
                  <h2>Premium</h2>
                  <h6>$3 a month</h6><br/>
                    <ul>
                      <li style={{margin: '8px 0'}}>&#10003; All the feautres of Basic, plus:</li>
                      <li style={{margin: '8px 0'}}>&#10003; Interactive graphs &#38; charts</li>
                      <li style={{margin: '8px 0'}}>&#10003; Several question types</li>
                      <li style={{margin: '8px 0'}}>&#10003; Different versions of tests</li>
                      <li style={{margin: '8px 0'}}>&#10003; Unlimited questions &#38; tests</li>
                      <li style={{margin: '8px 0'}}>&#10003; Send reports to students</li>
                    </ul>
                  </div>
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <br/><br/><br/><br/><br/>
          
          <p style={{textAlign: 'center'}}>_______________________________________________________________</p>

          <br/><br/>
          <h4 style={{textAlign: 'center'}}>Questions? Contact us.</h4>
          <p style={{textAlign: 'center', marginLeft: '20%', marginRight: '20%'}}>Try TG out for a month free &#38; see how it works. Just send us an email.
          </p>
          <h5 style={{textAlign: 'center'}}>contact@innexgo.com</h5>
      </ExternalLayout>
    </div>
);
}

export default Pricing;
