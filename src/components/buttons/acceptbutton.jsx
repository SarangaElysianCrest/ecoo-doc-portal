import React, { Component } from "react";
import { checker } from "../../Helpers/uiHelper";
import RoundedButton from "./RoundedButtons";
import { regApprovalStepsRoutes } from "../../app/routes";

function AcceptButton(props) {
	const { pdfStatusArray, onApprove, step } = props;

	const onHandleApprove = () => {
		console.log("onHandleApprove");
		onApprove();
	};

	const onHandleRoute = () => {
		console.log("onHandleRoute");
		window.open(regApprovalStepsRoutes + `${step}`, "_self");
	};

	const getFunction = () => {
		const isAllTrue = checker(pdfStatusArray);
		if (isAllTrue) {
			onHandleRoute();
			onApprove();
		} else {
			onHandleApprove();
		}
	};

	return (
		<RoundedButton
			disabled={false}
			onClick={getFunction}
			ref={undefined}
			className={`${props.label ? "nextButton" : "pdfAcceptBTN "}`}
			type='submit'>
			{props.label ? props.nextBtnName : "Approve"}
			{props.children}
		</RoundedButton>
	);
}

export default AcceptButton;
