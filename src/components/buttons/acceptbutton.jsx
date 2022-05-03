import React, { Component } from "react";
import RoundedButton from "./RoundedButtons";

function AcceptButton(props) {
	const { pdfStatusArray, onApprove, step } = props;

	let checker = (arr) => arr.every((v) => v === true);

	const onHandleApprove = () => {
		console.log("onHandleApprove");
		onApprove(true);
	};

	const onHandleRoute = () => {
		console.log("onHandleRoute");
		window.open(`/approvalProcess/companyRegistration/${step}`,"_self");
	};

	const getFunction = () => {
		const isAllTrue = checker(pdfStatusArray);
		if (isAllTrue) {
			onHandleRoute();
		} else {
			onHandleApprove();
		}
	};

	return (
		<RoundedButton onClick={getFunction} ref={undefined} className='pdfAcceptBTN' type='submit'>
			{props.label}{props.children}
		</RoundedButton>
		// <a href="/approvalProcess/companyRegistration/step02">
		// </a>
	);
}

export default AcceptButton;
