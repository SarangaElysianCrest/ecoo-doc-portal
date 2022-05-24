import React, { Component } from "react";
import GridViewIcon from "@mui/icons-material/GridView";

const DashDetailCard = ({ headerIcon, title, path, ...props }) => {
	return (
		<div className='dash-detail-card' style={{ height: "auto" }}>
			<a href={path}>
				<div className='dash-detail-card__header'>
					<div>
						{headerIcon || <GridViewIcon />}&nbsp;&nbsp;&nbsp;&nbsp;
						<h1 className='DashDetailCardHeader'>{title || "Header"}</h1>
					</div>
				</div>
				<div className='dash-detail-card__body'>{props.children}</div>
			</a>
		</div>
	);
};

export default DashDetailCard;
