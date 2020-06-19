import React from 'react';
import ExternalLayout from '../components/ExternalLayout';

function Register(){
return(
  <ExternalLayout>
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
                <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account">Create Account</button>
            </div>
        </form>
        <div className="register">
        <h5><a href="/login">Sign in instead</a></h5>
        </div>
        <div className="social-media">
            <h5>Sign up with social media</h5>
            <div className="social-icons">
                <a href="#"><i className="icon-social-facebook" title="Facebook"></i></a>
                <a href="#"><i className="icon-social-google" title="Google"></i></a>
                <a href="#"><i className="icon-social-twitter" title="Twitter"></i></a>
            </div>
        </div>
    </div>
  </ExternalLayout>
  );
  }

  export default Register;
