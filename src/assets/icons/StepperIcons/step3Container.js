import React from "react";
import { regApprovalStepsRoutes } from "../../../app/routes";

const Step3Container = ({ color, iconURL, title, active, completed }) => {
	const currentStep = parseInt(sessionStorage.getItem("currentStep"));

	const reject = sessionStorage.getItem("rejectStep3");
	const iconSelection = () => {
		if (reject) {
			return "https://img.icons8.com/glyph-neue/24/F5463A/delete-sign.png";
		} else {
			if (active) {
				return "https://img.icons8.com/material-outlined/24/4c94e7/clock--v1.png";
			} else if (completed) {
				return "https://img.icons8.com/glyph-neue/24/32bea6/checkmark.png";
			} else {
				return "https://img.icons8.com/ios/18/000000/lock--v1.png";
			}
		}
	};
	const svgColorSelector = () => {
		if (reject) {
			return "#F5463A";
		} else {
			if (active) {
				return "#4c94e7";
			} else if (completed) {
				return "#32bea6";
			} else {
				return "#dddddd";
			}
		}
	};
	const textColorSelector = () => {
		if (active) {
			return { color: "#fcfcfc" };
		} else if (completed) {
			return { color: "#fcfcfc" };
		} else {
			return { color: "#2c2c2c" };
		}
	};
	return (
		<div
			onClick={() => {
				completed || active
					? window.open(regApprovalStepsRoutes + `step03`, "_self")
					: console.log("Step 03 is disabled");
			}}>
			<svg
				width={250}
				height={50}
				viewBox='0 0 250 50'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				fill={svgColorSelector()}>
				<polygon class='st0' points='220,45 0,45 29.87,25 0,5 220,5 250,25 ' />
			</svg>
			<div
				style={{
					marginTop: "-40px",
					marginLeft: "35px",
					flexDirection: "row",
					display: "flex",
					alignItems: "center",
				}}>
				<span
					style={{
						width: 30,
						height: 30,
						backgroundColor: "#fff",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<img src={iconSelection()} alt='icon' />
				</span>
				<span className='ml-1 text-sm' style={textColorSelector()}>
					{title}
				</span>
			</div>
			{currentStep === 2 && (
				<div
					style={{
						width: 150,
						height: 15,
						borderStyle: "solid",
						borderWidth: "10px 75px 0 75px",
						borderTopColor: svgColorSelector(),
						borderLeftColor: "transparent",
						borderRightColor: "transparent",
						borderBottomColor: "transparent",
						margin: "10px auto 2px auto",
					}}></div>
			)}
		</div>
	);
};

export default Step3Container;
