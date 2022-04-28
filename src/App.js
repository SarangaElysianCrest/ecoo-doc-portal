import "./styles/global.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebPortal from "./WebPortal";
import RegApprovalProcessHome from "./features/companyRegistration/components/approvalProcess/RegApprovalProcessHome";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={Loader()}>
      <Router forceRefresh={true}>
        <Switch>
          <Route path={"/web"}>
            <WebPortal />
          </Route>
          <Route path={"/approvalProcess/companyRegistration"}>
            <RegApprovalProcessHome />
          </Route>
          <Route path={"/"}>
            <a href="/web/companyRegistration">Go to dashboard</a>
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
