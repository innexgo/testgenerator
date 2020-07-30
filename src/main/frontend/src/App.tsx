import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from './components/AuthenticatedRoute';

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import AssignTest from "./pages/AssignTest";
import Tests from "./pages/Tests";
import TestChooseTestBank from "./pages/TestChooseTestBank";
import AddTest from "./pages/AddTest";
import EditTest from "./pages/EditTest";
import EmailTest from "./pages/EmailTest";
import StudentsToTest from "./pages/StudentsToTest";
import TestBanks from "./pages/TestBanks";
import TestBankCopy from "./pages/TestBankCopy";
import UpdateInformation from "./pages/UpdateInformation";
import EditTestBank from "./pages/EditTestBank";
import AddQuestion from "./pages/AddQuestion";
import EditQuestion from "./pages/EditQuestion";
import CopySelectedQuestions from "./pages/CopySelectedQuestions";
import ReportsOverview from "./pages/ReportsOverview";
import TestReport from "./pages/TestReport";
import ClassReport from "./pages/ClassReport";


function getPreexistingApiKey() {
  const preexistingApiKeyString = localStorage.getItem("apiKey");
  if (preexistingApiKeyString == null) {
    return null;
  } else {
    try {
      // TODO validate here
      return JSON.parse(preexistingApiKeyString) as ApiKey;
    } catch (e) {
      // try to clean up a bad config
      localStorage.setItem("apiKey", JSON.stringify(null));
      return null;
    }
  }
}

function App() {
  const preexistingApiKey = getPreexistingApiKey();

  const [apiKey, setApiKeyState] = React.useState(preexistingApiKey);

	// contains methods to get and set the api key, while updating the local store as well
  const apiKeyGetSetter = {
    apiKey: apiKey,
    setApiKey: (data: ApiKey | null) => {
      localStorage.setItem("apiKey", JSON.stringify(data));
      setApiKeyState(data);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/features" exact component={Features} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/dashboard" exact component={Dashboard} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/assigntest" exact component={AssignTest} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/tests" exact component={Tests} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/testchoosetestbank" exact component={TestChooseTestBank} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/addtest" exact component={AddTest} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/edittest" exact component={EditTest} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/emailtest" exact component={EmailTest} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/studentstotest" exact component={StudentsToTest} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/testbanks" exact component={TestBanks} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/testbankcopy" exact component={TestBankCopy} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/updateinformation" exact component={UpdateInformation} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/edittestbank" exact component={EditTestBank} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/addquestion" exact component={AddQuestion} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/editquestion" exact component={EditQuestion} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/copyselectedquestions" exact component={CopySelectedQuestions} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/reportsoverview" exact component={ReportsOverview} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/testreport" exact component={TestReport} />
        <AuthenticatedRoute {...apiKeyGetSetter} path="/classreport" exact component={ClassReport} />
      </Switch>
    </BrowserRouter>);
}

export default App;
