import React from "react";
import { useStore } from "../../../app/context/store";

function Summary(props) {
	const { store, setStore } = useStore();
	let summaryObjectArray = [
		{ step: 1, comment: "" },
		{ step: 2, comment: "" },
		{ step: 3, comment: "" },
		{ step: 4, comment: "" },
		{ step: 5, comment: "" },
	];

	const dataObject = {
		applicationType: "Test",
		st1Comment: "",
		st2Comment: "",
		st3Comment: "",
		st4Comment: "",
		st5Comment: "",
		getComment: "",
		cpCompanyId: {
			id: parseInt(localStorage.getItem("ID")),
		},
		manageUserId: {
			id: store.userID,
		},
	};

	React.useEffect(() => {
		props.setSummaryObjectApi(dataObject);
		console.log("Store Context >>>>>>>>>>>", dataObject);
	}, []);

	const renderRejectedSteps = () => {
		return summaryObjectArray.map((step) => {
			return (
				<div key={step?.step} className='w-full h-14  '>
					<div className='flex flex-row items-center  pl-5 '>
						<div className='w-1/12'></div>
						<div className='w-1/12 flex justify-center items-center h-8 mr-4'>
							{step?.comment !== "" && (
								<span className=''>
									<img src='https://img.icons8.com/flat-round/20/000000/delete-sign.png' />
								</span>
							)}
							{step?.comment === "" && (
								<span className=''>
									<img src='https://img.icons8.com/flat-round/20/000000/checkmark.png' />
								</span>
							)}
						</div>
						<div className='w-8/12'>
							{step?.step === 1 ? (
								<span>Product Information</span>
							) : step?.step === 2 ? (
								<span>Business Registration</span>
							) : step?.step === 3 ? (
								<span>Management Info</span>
							) : step?.step === 4 ? (
								<span>Other Personnel Info</span>
							) : step?.step === 5 ? (
								<span>Process Flow</span>
							) : (
								<span></span>
							)}
						</div>
					</div>
					<div className='ml-28 -mt-2'>
						{step?.comment !== "" && <span className='userName'>{step?.comment}</span>}
					</div>
				</div>
			);
		});
	};

	const mapObject = (currentObjects) => {
		currentObjects.map((currentObject) => {
			summaryObjectArray.forEach((step) => {
				if (step?.step === currentObject.step) {
					step.comment = currentObject.comment;
				}
			});
		});
		summaryObjectArray.map((step) => {
			step.comment !== ""
				? (dataObject[`st${step.step}Comment`] = step.comment)
				: (dataObject[`st${step.step}Comment`] = "");
		});

		return renderRejectedSteps();
	};

	return (
		<div className='mt-5 '>
			<div>Summary of approval steps </div>
			<hr className='mb-5' />
			{mapObject(props.summaryObject)}
		</div>
	);
}

export default Summary;
