import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@material-ui/core";
import useLocalStorage from "../../app/helper/useLocal";
import Summary from "./confirmPromptComponents/summary";
import {
	finalApprovalAPI_adapter,
	finalApprovalStatusUpdateAPI_adapter,
} from "../../app/api/adapter";
import { useStore } from "../../app/context/store";

export default function ConfirmPrompt({ handleClickOpen, handleClose, isOpen }) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = useLocalStorage("REJECT", []);
	const [id, setId] = useLocalStorage("ID", "");
	const { store, setStore } = useStore();
	const userRole = store.role;
	console.log("User Role  >>>>>>>>>>", userRole);

	const [summaryObjectApi, setSummaryObjectApi] = React.useState({
		applicationType: "",
		st1Comment: "",
		st2Comment: "",
		st3Comment: "",
		st4Comment: "",
		st5Comment: "",
		getComment: "",
		cpCompanyId: {
			id: 0,
		},
		manageUserId: {
			id: 0,
		},
	});

	React.useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	return (
		<div>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='draggable-dialog-title'
				sx={{
					backdropFilter: "blur(10px)",
				}}>
				<DialogTitle
					style={{
						cursor: "move",
						backgroundColor: `${value.length === 0 ? "#32bea6" : "#ef5350"}`,
						// color: `${value.length === 0 ? "#32bea6" : "#ef5350"}`,
						color: "#fff",
						fontWeight: 600,
					}}
					id='draggable-dialog-title'>
					Registration Confirmation !
				</DialogTitle>
				<DialogContent>
					<DialogContentText className='pt-4'>
						Are you sure you want to {value.length === 0 ? "Approve" : "Reject"} this Registration
					</DialogContentText>
					{/* {JSON.stringify(value)} */}
					<Summary summaryObject={value} setSummaryObjectApi={setSummaryObjectApi} />
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
					{value.length === 0 ? (
						<Button
							variant='contained'
							sx={{ bgcolor: "#32bea6" }}
							onClick={() => {
								finalApprovalAPI_adapter(summaryObjectApi, id);
								finalApprovalStatusUpdateAPI_adapter(summaryObjectApi, id, userRole);
								console.log("Summary >>>>>>>>>>>>>>>>>", summaryObjectApi);
								// window?.sessionStorage?.setItem("completedSteps", 0);
								// window.open("/web/companyRegistration", "_self");
							}}>
							Approve
						</Button>
					) : (
						<Button
							variant='contained'
							color='error'
							onClick={() => {
								finalApprovalAPI_adapter(summaryObjectApi, id);
								finalApprovalStatusUpdateAPI_adapter(summaryObjectApi, id, userRole);
								console.log("Summary >>>>>>>>>>>>>>>>>", summaryObjectApi);
								// window?.sessionStorage?.setItem("completedSteps", 0);
								// window.open("/web/companyRegistration", "_self");
							}}>
							Reject
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</div>
	);
}
