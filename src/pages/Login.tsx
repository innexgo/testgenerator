import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { logIn } from "../actions/authActions";

interface IProps {
  logInConnect: () => void;
}

const Login = ({ logInConnect }: IProps ) => (
<div className="registration-form">
        <form>
            <div className="title">
              <h1>Login</h1>
              </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="email" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Password" />
            </div>
            <div className="forgot">
          <h5><a href="/forgot-password">Forgot Password?</a></h5>
          </div>
            <div className="form-group">
            <Container>
            <Row>
                <Col><button type="button" className="btn btn-block create-account" onClick={logInConnect}>Login</button></Col>
                  <Col><button type="button" className="btn btn-block create-account"><Link to ='/register'>Sign Up</Link></button></Col>
            </Row>
            </Container>
            </div>
        </form>


        <div className="social-media">
            <h5>Sign in with social media (Take out if we don't use)</h5>
            <div className="social-icons">
                <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i className="icon-social-google" title="Google"></i></a>
                <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
    );

const mapDispatchToProps = {
  logInConnect: logIn
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);

