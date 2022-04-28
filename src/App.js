import "./styles/global.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebPortal from "./WebPortal";
import RegApprovalProcessHome from "./features/companyRegistration/components/approvalProcess/RegApprovalProcessHome";
import Loader from "./components/Loader/Loader";
import Login from "./features/auth/login";
import Registration from "./features/auth/registration";

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
					<Route exact path={"/login"} component={Login} />
					<Route exact path={"/registration"} component={Registration} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
