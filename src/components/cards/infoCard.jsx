import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import React, { Component } from "react";

export const Bull = (props) => {
	return (
		<div>
			<span className='card-1-heading'>{props.key_}: &nbsp;&nbsp;</span>
			<span>{props.value}</span>
		</div>
	);
};
export default function InfoCard(props) {
	return (
		<React.Fragment>
			<Card variant='outlined' className='shadow-gray-500 shadow-md rounded-2xl'>
				<CardContent>
					<div>
						<span className='card-1-heading'>Full Name&nbsp;&nbsp;&nbsp;&nbsp;: </span>
						<span>Kamal</span>
					</div>
					<div>
						<span className='card-1-heading'>Designation : </span>
						<span>CEO</span>
					</div>
					<div>
						<span className='card-1-heading'>
							Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
						</span>
						<span>Kamal@gmail.com</span>
					</div>
					<div>
						<span className='card-1-heading'>Telephone&nbsp;&nbsp;&nbsp; : </span>
						<span>0710011001</span>
					</div>
					<div>
						<span className='card-1-heading'>
							Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
						</span>
						<span>Horana</span>
					</div>
					<div>
						<span className='card-1-heading'>Signature&nbsp;&nbsp;&nbsp;&nbsp; : </span>
						<span></span>
					</div>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</React.Fragment>
	);
}
