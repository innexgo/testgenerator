import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ExternalLayout from "../components/ExternalLayout";

import history from "../history";
import { CurrentState } from "../types";

interface IProps {
  exact?: boolean;
  isAuthenticated: boolean | null;
  path: string;
  component: React.ComponentType<any>;
}

const LoggedOutRoute = ({
  component: Component,
  isAuthenticated,
  ...otherProps
}: IProps) => {
  if (isAuthenticated === true) {
    history.push("/dashboard");
  }

  return (
  <>
    <ExternalLayout>
    <Route
      render={otherProps => (
        <>
          <Component {...otherProps} />
        </>
      )}
    />
    </ExternalLayout>
  </>
);
};

const mapStateToProps = (state: CurrentState) => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(
  mapStateToProps
)(LoggedOutRoute);

