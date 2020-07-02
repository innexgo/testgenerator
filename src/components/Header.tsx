import * as React from 'react';
import { connect } from "react-redux";
import { CurrentState } from "../types";

interface IProps {
  isAuthenticated: boolean | null;
}

const Header = ({ isAuthenticated }: IProps) => {
  const logInOut = isAuthenticated ? (
                                                 <div className="col-sm-7 col-lg-3 col-xl-3 offset-xl-1 d-none d-sm-block order-lg-3">
                                <div className="header-btns">
                                    <div className="btn-1 btn-outlined">
                                        <a href="/logout">Log Out</a>
                                    </div>
                                </div>
                            </div>
                        )  : (
                            <div className="col-sm-7 col-lg-3 col-xl-3 offset-xl-1 d-none d-sm-block order-lg-3">
                                <div className="header-btns">
                                    <div className="btn-1 btn-outlined">
                                        <a href="/login">Login</a>
                                    </div>
                                    <div className="btn-2">
                                        <a href="/register">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                          );


  return(

                <header className="site-header">
                    <div className="container">
                        <div className="row justify-content-center align-items-center position-relative">
                            <div className="col-sm-4 col-6 col-lg-2 col-xl-2 order-lg-1">
                                <div className="brand">
                                    <a href=""><img src="img/innexgo_transparent_logo.png" alt="" /></a>
                                </div>
                            </div>

                            {logInOut}

                            <div className="col-sm-1 col-6 col-lg-7 col-xl-6 position-static order-lg-2">
                                <div className="main-navigation">
                                    <ul className="main-menu">
                                        <li className="menu-item"><a href="/" className="active">Home</a></li>
                                        <li className="menu-item"><a href="/features">Features</a></li>
                                
                                        <li className="menu-item"><a href="/pricing">Pricing</a></li>
                                
                                        </ul>
                                </div>
                                <div className="mobile-menu"></div>
                            </div>

                        </div>
                    </div>
                </header>
);
}

const mapStateToProps = (state: CurrentState) => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(
  mapStateToProps,
)(Header);
