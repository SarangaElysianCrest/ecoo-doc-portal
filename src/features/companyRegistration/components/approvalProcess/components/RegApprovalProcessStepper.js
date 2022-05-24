import * as React from "react";

import Step1Container from "../../../../../assets/icons/StepperIcons/step1Container";
import Step2Container from "../../../../../assets/icons/StepperIcons/step2Container";
import Step3Container from "../../../../../assets/icons/StepperIcons/step3Container";
import Step4Container from "../../../../../assets/icons/StepperIcons/step4Container";
import Step5Container from "../../../../../assets/icons/StepperIcons/step5Container";

export default function RegApprovalProcessStepper(props) {
	const completedSteps = sessionStorage.getItem("completedSteps");

	const checkSteps = () => {
		if (completedSteps > props.activeStep) {
			return parseInt(completedSteps);
		} else {
			return props.activeStep;
		}
	};
	const renderStepper = () => {
		switch (checkSteps()) {
			case 0:
				return (
					<>
						<Step1Container title='Product Information' active />
						<Step2Container title='Business Registration' />
						<Step3Container title='Management Info' />
						<Step4Container title='Other Personnel Info' />
						<Step5Container title='Process Flow' />
					</>
				);

			case 1:
				return (
					<>
						<Step1Container title='Product Information' completed />
						<Step2Container title='Business Registration' active />
						<Step3Container title='Management Info' />
						<Step4Container title='Other Personnel Info' />
						<Step5Container title='Process Flow' />
					</>
				);

			case 2:
				return (
					<>
						<Step1Container title='Product Information' completed />
						<Step2Container title='Business Registration' completed />
						<Step3Container title='Management Info' active />
						<Step4Container title='Other Personnel Info' />
						<Step5Container title='Process Flow' />
					</>
				);

			case 3:
				return (
					<>
						<Step1Container title='Product Information' completed />
						<Step2Container title='Business Registration' completed />
						<Step3Container title='Management Info' completed />
						<Step4Container title='Other Personnel Info' active />
						<Step5Container title='Process Flow' />
					</>
				);
			case 4:
				return (
					<>
						<Step1Container title='Product Information' completed />
						<Step2Container title='Business Registration' completed />
						<Step3Container title='Management Info' completed />
						<Step4Container title='Other Personnel Info' completed />
						<Step5Container title='Process Flow' active />
					</>
				);
			case 5:
				return (
					<>
						<Step1Container title='Product Information' completed />
						<Step2Container title='Business Registration' completed />
						<Step3Container title='Management Info' completed />
						<Step4Container title='Other Personnel Info' completed />
						<Step5Container title='Process Flow' completed />
					</>
				);

			default:
				return (
					<>
						<Step1Container title='Product Information' />
						<Step2Container title='Business Registration' />
						<Step3Container title='Management Info' />
						<Step4Container title='Other Personnel Info' />
						<Step5Container title='Process Flow' />
					</>
				);
		}
	};

	return (
		<div spacing={4} className='' style={{ margin: "0 auto" }}>
			<div style={{ display: "flex", flexDirection: "row" }}>{renderStepper()}</div>
		</div>
	);
}
