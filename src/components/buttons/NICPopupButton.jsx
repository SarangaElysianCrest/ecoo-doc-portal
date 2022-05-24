import React from "react";
// import InfoIcon from "@mui/icons-material/Info";
import InfoIcon from "@mui/icons-material/HelpOutlineRounded";
import Popup from "reactjs-popup";

const NICPopupButton = () => {
	return (
		<Popup
			trigger={<InfoIcon fontSize='medium' className='my-auto' style={{ color: "#BDBDBD" }} />}
			position='top left'
			contentStyle={{ borderRadius: "20px" }}
			offsetX={1}
			arrowStyle={{ color: "#fff" }}>
			<div className=' bg-white p-4 shadow-md border rounded-sm' style={{ borderRadius: "10px" }}>
				<div className='border-b  border-gray-400 '>
					<a
						href='https://www.google.com/'
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: "#4E4E4E" }}>
						Check NIC
					</a>
				</div>
			</div>
		</Popup>
	);
};

export default NICPopupButton;
