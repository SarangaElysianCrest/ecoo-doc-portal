import React from "react";
import Section, { SectionColumn, SectionRow } from "../../layouts/sections/index";
import LoginCard from "./components/LoginCard";
import RoundedButton from "./components/RoundedButtons";
import SriLankaNationalLogo from "../../assets/images/SriLankaNationalLogo.png";
import Banner from "../../assets/images/LoginRegistrationBanner.jpg";
import RegistrationCard from "./components/RegistrationCard";
import { useHistory } from "react-router-dom";

function Registration() {
	const history = useHistory();

	const handleLogin = () => {
		history.push("/login");
	};
	return (
		<div className='loginContainer'>
			<Section className='h-full '>
				<SectionColumn className=' w-4/12 loginPageLeft h-full items-center justify-center'>
					<SectionColumn className='grid justify-items-center'>
						<div>
							<img src={SriLankaNationalLogo} alt='Picture of the author' width={60} height={80} />
						</div>
						<span className='docText'>Department of Commerce</span>
						<span className='docSubText'>Electronic Certificate of Origin</span>
						<RegistrationCard />
						<span className='copyrightText'>
							Copyright 2022 Department of Commerce. All Rights Reserved.
						</span>
					</SectionColumn>
				</SectionColumn>
				<SectionColumn className='w-8/12  h-full bg-gray-700 '>
					<div className='absolute z-20'>
						<RoundedButton className='floatingBTN' onClick={handleLogin}>
							Login
						</RoundedButton>
					</div>

					<div className='fixed z-10  h-full flex justify-center items-center w-8/12 '>
						<span className='loginWelcomeText'>
							Welcome to Department of Commerce <br /> Web Portal
						</span>
					</div>

					<img src={Banner} alt='Page Banner' className='bannerImage' />
				</SectionColumn>
			</Section>
		</div>
	);
}

export default Registration;
