import React, { Component, useState } from "react";
import useLocalStorage from "../../app/helper/useLocal";
import RejectDialog from "../alerts/rejectPrompt";
import RoundedButton from "./RoundedButtons";

export default function RejectButton({ onClick, ...props }) {
	const { nextRoute, currentStep } = props;
	const [open, setOpen] = useState(false);
	const [value, setValue] = useLocalStorage("REJECT", []);

	const handleReject = (comment) => {
		setValue([...value, { step: currentStep, comment: comment }]);
		handleClose();
		sessionStorage.setItem("rejectStep" + currentStep, true);
		window.open(nextRoute, "_self");
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<RoundedButton
				ref={undefined}
				onClick={handleClickOpen}
				className='pdfRejectBTN mx-5'
				type='submit'>
				Reject
			</RoundedButton>
			<RejectDialog
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
				isOpen={open}
				handleReject={handleReject}
			/>
		</>
	);
}
