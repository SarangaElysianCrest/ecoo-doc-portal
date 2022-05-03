import React from "react";
import RoundedButton from "./RoundedButtons";
import TextField from "./TextField";

export default function RegistrationCard(props) {
	return (
		<div>
			<div className='flex-col flex'>
				<span className='loginText'>Registration</span>
				<span className='docSubText pb-5'>
					Enter your credentials to create
					<br />
					new account.
				</span>
			</div>
			<TextField placeholder='Designation' type='text'></TextField>
			<TextField placeholder='Name with initials' type='text'></TextField>
			<TextField placeholder='Email' type='email'></TextField>
			<TextField placeholder='Mobile Number' type='text'></TextField>
			<TextField placeholder='Password' type='password'></TextField>
			<TextField placeholder='Confirm Password' type='password'></TextField>
			<div className='flex items-center w-full flex-col'>
				<RoundedButton className='loginBTN' onClick={props.handleRoute}>
					Sign up
				</RoundedButton>
			</div>
		</div>
	);
}
