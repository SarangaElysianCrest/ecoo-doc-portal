import React from "react";

export default function TextField(props) {
	return (
		<input className='loginCardInputsField' placeholder={props.placeholder} type={props.type} />
	);
}
