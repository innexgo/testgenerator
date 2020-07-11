import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

class InternalLayout extends Component {
  render() {
  return(
    <div>
      <Header />
      <SideBar />
      <div className="main">
        {this.props.children}
      </div>
      <Footer />
    </div>
  );
  }
}

export default InternalLayout;
