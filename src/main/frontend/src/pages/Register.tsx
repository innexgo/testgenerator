import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Register(){
return(
    <div className="registration-form">
        <form>
            <div className="title">
              <h1>Sign Up</h1>
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="schoolname" placeholder="School Name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="department" placeholder="Department" />
            </div>
            <div className="form-group">
            <Container>
            <Row>
                <Col><button type="button" className="btn btn-block create-account"><Link to = '/login'>Sign In</Link></button></Col>
                  <Col><button type="button" className="btn btn-block create-account">Sign Up</button></Col>
            </Row>
            </Container>
            </div>
        </form>
        <div className="register">
        </div>
        <div className="social-media">
            <h5>Sign up with social media (Take out if we don't use)</h5>
            <div className="social-icons">
                <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i className="icon-social-google" title="Google"></i></a>
                <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
  );
  }

  export default Register;
