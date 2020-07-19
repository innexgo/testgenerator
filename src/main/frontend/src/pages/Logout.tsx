import * as React from "react";
import { connect } from "react-redux";

import { logOut } from "../actions/authActions";

interface IProps {
  logOutConnect: () => void;
}

const Logout = ({ logOutConnect }: IProps) => (
<>
  <div style={{margin: "auto"}}>
    <p>Logout Test (Placeholder)</p>
    <button onClick={logOutConnect}>log me out</button>
  </div>
  </>
);

const mapDispatchToProps = {
  logOutConnect: logOut
};

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
