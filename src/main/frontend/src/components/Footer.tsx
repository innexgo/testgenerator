import React from 'react';

function Footer() {
  return (
      <section className="footer-section">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-2 col-md-3">
                        <div className="footer-logo">
                            <img src="img/innexgo_transparent_logo.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6  offset-lg-1">
                        <ul className="nav footer-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="copyright">
                    <p>©2020 All right reserved. </p>
                </div>
            </div>
          </section>);
}

export default Footer;
