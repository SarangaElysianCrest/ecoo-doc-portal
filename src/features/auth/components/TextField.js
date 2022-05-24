import React from "react";

export default function TextField(props) {
	return (
		<input {...props} className='loginCardInputsField' placeholder={props.placeholder} type={props.type} />
	);
}
