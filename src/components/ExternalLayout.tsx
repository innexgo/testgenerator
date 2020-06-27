import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

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
