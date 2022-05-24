import React from "react";
import { Route } from "react-router-dom";
import { SectionRow } from "../../../../components/section";
import RegApprovalProcessStep01 from "./components/RegApprovalProcessStep01";
import RegApprovalProcessStep02 from "./components/RegApprovalProcessStep02";
import RegApprovalProcessStep03 from "./components/RegApprovalProcessStep03";
import RegApprovalProcessStep04 from "./components/RegApprovalProcessStep04";
import RegApprovalProcessStep05 from "./components/RegApprovalProcessStep05";
import RegApprovalProcessStepper from "./components/RegApprovalProcessStepper";

import { regApprovalStepsRoutes } from "../../../../app/routes";

const steps = [
	"Business Registration",
	"Managment Informations",
	"Products Informations",
	"Flow Chart",
];

export const companyID = localStorage.getItem("ID");

const RegApprovalProcessHome = () => {
	const [activeStep, setActiveStep] = React.useState(0);

	return (
		<React.Fragment>
			<SectionRow className='flex-wrap justify-center section-row-1 pb-4 pt-5'>
				<div className='bnpl-heading-1'>Company Registration Approval Process</div>
			</SectionRow>
			<SectionRow className='mt-5'>
				<div className='flex justify-center section-row-1 pb-5 mb-5 w-full items-center '>
					<RegApprovalProcessStepper activeStep={activeStep} />
				</div>
			</SectionRow>

			<Route path={regApprovalStepsRoutes + "step01"}>
				<RegApprovalProcessStep01 setActiveStep={setActiveStep} />
			</Route>
			<Route path={regApprovalStepsRoutes + "step02"}>
				<RegApprovalProcessStep02 setActiveStep={setActiveStep} />
			</Route>
			<Route path={regApprovalStepsRoutes + "step03"}>
				<RegApprovalProcessStep03 setActiveStep={setActiveStep} />
			</Route>
			<Route path={regApprovalStepsRoutes + "step04"}>
				<RegApprovalProcessStep04 setActiveStep={setActiveStep} />
			</Route>
			<Route path={regApprovalStepsRoutes + "step05"}>
				<RegApprovalProcessStep05 setActiveStep={setActiveStep} />
			</Route>
		</React.Fragment>
	);
};

export default RegApprovalProcessHome;
