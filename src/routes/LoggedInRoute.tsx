import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import InternalLayout from "../components/InternalLayout";

import history from "../history";
import { CurrentState } from "../types";

interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedInRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: IProps) => {
  if(isAuthenticated === false) {
    history.push("/login");
    //add some sort of error message later asking user to log in
  }
  return(
  <>
    <InternalLayout>
    <Route
      render={otherProps => (
        <>
          <Component {...otherProps} />
        </>
      )}
    />
    </InternalLayout>
  </>
);
};

const mapStateToProps = (state: CurrentState) => ({
  isAuthenticated: state.isAuthenticated
});


export default connect(
  mapStateToProps
)(LoggedInRoute);
