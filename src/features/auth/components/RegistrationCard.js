import React from "react";
import RoundedButton from "./RoundedButtons";
import TextField from "./TextField";

export default function RegistrationCard() {
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
			<TextField placeholder='Email' type='email'></TextField>
			<TextField placeholder='Password' type='password'></TextField>
			<TextField placeholder='Confirm Password' type='password'></TextField>
			<div className='flex items-center w-full flex-col'>
				<RoundedButton className='loginBTN'>Sign up</RoundedButton>
			</div>
		</div>
	);
}
