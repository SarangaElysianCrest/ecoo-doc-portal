import React from "react";
// import InfoIcon from "@mui/icons-material/Info";
import InfoIcon from '@mui/icons-material/HelpOutlineRounded';
import Popup from "reactjs-popup";

const PopupButton = () => {
	return (
		<Popup
			trigger={<InfoIcon fontSize='medium' className='my-auto' style={{ color: "#BDBDBD" }} />}
			position='bottom right'>
			<div className=' bg-white p-4 shadow-md border'>
				<div className='border-b p-1 border-gray-400 '>
					<a
						href='https://www.macmap.org/'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: "#4E4E4E" }}>
						Market Access Map
					</a>
				</div>
				<div className='border-b p-1 border-gray-400 '>
					<a
						href='https://www.indiantradeportal.in/'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: "#4E4E4E" }}>
						Indian Trade Portal
					</a>
				</div>
			</div>
		</Popup>
	);
};

export default PopupButton;
