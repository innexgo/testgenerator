import React from 'react';
import ExternalLayout from '../components/ExternalLayout';

function Login(){
return(
<ExternalLayout>
<div className="registration-form">
        <form>
            <div className="title">
              <h1>Login</h1>
              </div>
            <div className="form-group">
                <input type="text" className="form-control item" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control item" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-block create-account">Login</button>
            </div>
        </form>
                <div className="register">
          <h5><a href="/register">Don't have an account? Click here to create one.</a></h5>
          </div>

        <div className="social-media">
            <h5>Sign in with social media</h5>
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

export default Login;
