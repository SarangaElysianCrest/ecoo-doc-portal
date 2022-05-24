import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function RejectDialog({ handleReject, handleClose, isOpen, ...props }) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState();
	const history = useHistory();

	React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	return (
		<div>
			<Dialog open={open} onClose={handleClose} aria-labelledby='draggable-dialog-title'>
				<DialogTitle style={{ cursor: "move" }} id='draggable-dialog-title'>
					Reason for Rejection
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<TextareaAutosize
							aria-label='minimum height'
							minRows={3}
							placeholder='Please mention the reason for rejecting this application as a comment.'
							style={{ width: 450 }}
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
					<Button onClick={() => handleReject(value)}>Reject</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
