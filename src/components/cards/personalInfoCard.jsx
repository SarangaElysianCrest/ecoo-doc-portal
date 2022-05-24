import React, { Component } from "react";
import NICPopupButton from "../buttons/NICPopupButton";

export default function PersonalInfoCard({ state, ...props }) {
	return (
		<>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>Full Name</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.FullName}</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>Designation</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.designation}</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>NIC</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-6/12  m-1 Business-Name'>{state?.nic}</div>
				<div className='w-1/12 justify-end flex'>
					<NICPopupButton />
				</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>email</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.email}</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>Mobile Number</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.mobileNumber}</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>Telephone</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.telePhoneNumber}</div>
			</div>
			<div className='Rectangle-1 flex-row flex'>
				<div className=' w-4/12  m-1 Business-Name'>Address</div>
				<div className=' w-1/12  m-1 Business-Name'>:</div>
				<div className=' w-7/12  m-1 Business-Name'>{state?.Address}</div>
			</div>
		</>
	);
}
