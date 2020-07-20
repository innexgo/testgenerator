import * as React from "react";
import { connect} from "react-redux";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import ForgotPassword from "../pages/ForgotPassword";
import AssignTest from "../pages/AssignTest";
import CurrentTests from "../pages/CurrentTests";
import EmailTest from "../pages/EmailTest";
import StudentsToTest from "../pages/StudentsToTest";
import TestBanks from "../pages/TestBanks";
import TestBankCopy from "../pages/TestBankCopy";
import UpdateInformation from "../pages/UpdateInformation";
import EditTestBank from "../pages/EditTestBank";
import AddQuestion from "../pages/AddQuestion";
import CopySelectedQuestions from "../pages/CopySelectedQuestions";
import TestReport from "../pages/TestReport";

import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <LoggedOutRoute path="/login" exact={true} component={Login} />
      <LoggedOutRoute path="/register" exact={true} component={Register} />
      <LoggedOutRoute path="/forgot-password" exact={true} component={ForgotPassword} />

      <LoggedInRoute path="/dashboard" exact={true} component={Dashboard} />
      <LoggedInRoute path="/logout" exact={true} component={Logout} />
      <LoggedInRoute path="/assigntest" exact={true} component={AssignTest} />
      <LoggedInRoute path="/currenttests" exact={true} component={CurrentTests} />
      <LoggedInRoute path="/emailtest" exact={true} component={EmailTest} />
      <LoggedInRoute path="/studentstotest" exact={true} component={StudentsToTest} />
      <LoggedInRoute path="/testbanks" exact={true} component={TestBanks} />
      <LoggedInRoute path="/testbankcopy" exact={true} component={TestBankCopy} />
      <LoggedInRoute path="/updateinformation" exact={true} component={UpdateInformation} />
      <LoggedInRoute path="/edittestbank" exact={true} component={EditTestBank} />
      <LoggedInRoute path="/addquestion" exact={true} component={AddQuestion} />
      <LoggedInRoute path="/copyselectedquestions" exact={true} component={CopySelectedQuestions} />
      <LoggedInRoute path="/testreport" exact={true} component={TestReport} />
    </Switch>
  );
};

export default Pages;
