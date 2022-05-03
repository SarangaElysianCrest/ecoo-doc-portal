import React from "react";

const Step1Container = ({ color, iconURL, title, active, completed }) => {
	const iconSelection = () => {
		if (active) {
			return "https://img.icons8.com/material-outlined/24/4c94e7/clock--v1.png";
		} else if (completed) {
			return "https://img.icons8.com/glyph-neue/24/32bea6/checkmark.png";
		} else {
			return "https://img.icons8.com/ios/18/000000/lock--v1.png";
		}
	};
	const svgColorSelector = () => {
		if (active) {
			return "#4c94e7";
		} else if (completed) {
			return "#32bea6";
		} else {
			return "#dddddd";
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
		<div width={250} height={50} style={{}}>
			<svg
				width={250}
				height={50}
				viewBox='0 0 250 50'
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				fill={svgColorSelector()}>
				<path class='st0' d='M219.29,45H24.78c-33.04,0-33.04-40,0-40h194.51L250,25L219.29,45z' />
			</svg>
			<div
				style={{
					marginTop: "-40px",
					marginLeft: "5px",
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
		</div>
	);
};

export default Step1Container;
