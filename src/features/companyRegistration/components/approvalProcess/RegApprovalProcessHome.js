import React from "react";
import { Route } from "react-router-dom";
import { SectionRow } from "../../../../components/section";
import RegApprovalProcessStep01 from "./components/RegApprovalProcessStep01";
import RegApprovalProcessStep02 from "./components/RegApprovalProcessStep02";
import RegApprovalProcessStep03 from "./components/RegApprovalProcessStep03";
import RegApprovalProcessStep04 from "./components/RegApprovalProcessStep04";
import RegApprovalProcessStep05 from "./components/RegApprovalProcessStep05";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RegApprovalProcessStepper from "./components/RegApprovalProcessStepper";

const steps = [
	"Business Registration",
	"Managment Informations",
	"Products Informations",
	"Flow Chart",
];

const RegApprovalProcessHome = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

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

			<Route path={"/approvalProcess/companyRegistration/step01"}>
				<RegApprovalProcessStep01 setActiveStep={setActiveStep} />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step02"}>
				<RegApprovalProcessStep02 setActiveStep={setActiveStep} />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step03"}>
				<RegApprovalProcessStep03 setActiveStep={setActiveStep} />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step04"}>
				<RegApprovalProcessStep04 setActiveStep={setActiveStep} />
			</Route>
			<Route path={"/approvalProcess/companyRegistration/step05"}>
				<RegApprovalProcessStep05 setActiveStep={setActiveStep} />
			</Route>
		</React.Fragment>
	);
};

export default RegApprovalProcessHome;
