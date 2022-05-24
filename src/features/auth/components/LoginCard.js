import React, { useState } from "react";
import { useAlert } from "../../../app/context/alerts";
import { useStore } from "../../../app/context/store";
import { overview } from "../../../app/routes";
import { updateRole } from "../../../Helpers/loginHelper";
import RoundedButton from "./RoundedButtons";
import TextField from "./TextField";
import { useHistory } from "react-router-dom";
import { authenticateUser } from "../../../app/api/core_api";

function LoginCard() {
	const { store, setStore } = useStore();
	const { setAlert } = useAlert();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();

	const handleClick = () => {
		let payload = {
			username: email,
			password: password,
		};

		authenticateUser(payload)
			.then((response) => {
				console.log("res", response);
				const status = response?.status;
				console.log("status", status);
				if (status === 200) {
					const isUpdate = updateRole(email, password, store, setStore);
					if (isUpdate) {
						history.push(overview);
						setAlert({
							message: "Login Successful!",
							severity: "success",
							show: true,
						});
					}
				}
			})
			.catch((error) => {
				setAlert({
					message: "Email or Password does not match",
					severity: "error",
					show: true,
				});
			});
		// const isUpdate = updateRole(email, password, store, setStore);
		// if (isUpdate) {
		//   // window.open(overview, "_self");
		//   history.push(overview);
		// } else {
		//   setAlert({message:"Email or Password does not match",severity:"error",show:true})
		// }
	};

	return (
		<div>
			<div className='flex-col flex'>
				<span className='loginText'>Login</span>
				<span className='docSubText pb-5'>
					Enter your credentials to access
					<br />
					your account.
				</span>
			</div>
			<TextField
				placeholder='Email'
				type='email'
				onChange={(e) => setEmail(e.target.value)}></TextField>
			<TextField
				placeholder='Password'
				type='password'
				onChange={(e) => setPassword(e.target.value)}></TextField>
			<div className='flex items-center w-full flex-col'>
				<RoundedButton className='loginBTN' onClick={handleClick}>
					Login
				</RoundedButton>
				<a href='#' className='forgotPassword'>
					Forgot Password?
				</a>
			</div>
		</div>
	);
}

export default LoginCard;
