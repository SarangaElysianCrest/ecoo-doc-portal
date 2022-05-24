import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";

export default function PromptBase({ isOpen, handleDismiss, data, ...props }) {
	const [open, setOpen] = useState(isOpen);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		handleDismiss();
		setOpen(false);
	};

	console.log(data);

	return (
		<div>
			<Dialog
				className={props.className || "prompt"}
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
				sx={{
					backdropFilter: "blur(10px)",
				}}>
				<DialogTitle id='alert-dialog-title'>{"Application Trail"}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{/* <p>{JSON.stringify(data)}</p> */}
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Application ID</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.applicationId}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Application Status</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.applicationStatus}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Application Submitted date & time</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.applicationSubmittedDatetime}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Application Trail ID</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.applicationTrailId}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Application Type</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.applicationType}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Approval Level</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.approvalLevel}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Approval Process start date & time</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.approvalProcessStartDatetime}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Approval Process end date & time</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.approvalProcessEndDatetime}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Officer</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.officer}</span>
						</div>
						<hr />
						<div className='pt-2 w-full'>
							<span className='w-1/12'>Remarks</span>
							<span className='w-1/12'> : </span>
							<span className='w-1/12'>{data.remarks}</span>
						</div>

						{/* <p>
							Lorem iamet consectetur adipisicing elit. Explicabo accusantium dicta vel, eaque sequi
							beatae. Consequuntur numquam aspernatur incidunt, natus possimus, aliquid, suscipit
							vero assumenda necessitatibus libero porro enim! Quis.
						</p> */}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button onClick={handleClose} autoFocus variant='contained'>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
