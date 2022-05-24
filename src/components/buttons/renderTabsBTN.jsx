import React from "react";
import { actors } from "../../Helpers/constants";
import { Button } from "@mui/material";


const RenderTabsBTN = (props) => {
	const { onClick, state, className } = props;

	const handleClick = (personDetails) => {
		onClick(state);
	};
	return (
		<React.Fragment>
			<div
				className={`bg-white rounded-xl shadow-lg overflow-hidden managementBTN relative mb-5 ${className}`}>
				<button className='grid grid-cols-12 items-center spending-box' onClick={handleClick}>
					<div className='col-span-1 '></div>
					<div className='col-span-10 '>
						<div>
                        <span className='managementBTNText '>{props?.name}</span>
						</div>
					</div>
					<div className='col-span-1'></div>
				</button>
			</div>
		</React.Fragment>
	);
};

export default RenderTabsBTN;
