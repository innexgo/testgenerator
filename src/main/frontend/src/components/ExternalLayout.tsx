import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

// Bootstrap CSS & Js
import '../style/external.scss';
import 'bootstrap/dist/js/bootstrap.js'
import 'popper.js/dist/popper.js'

class ExternalLayout extends Component {
  render() {
  return(
    <div>
      <Header />
      <div className="main">
        {this.props.children}
      </div>
      <Footer />
    </div>
  );
  }
}

export default ExternalLayout;
