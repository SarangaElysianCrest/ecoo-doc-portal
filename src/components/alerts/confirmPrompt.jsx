import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextareaAutosize } from "@material-ui/core";

export default function ConfirmPrompt({
  handleClickOpen,
  handleClose,
  isOpen,
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Registration Confirmation !
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to Approve this Registration
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={()=> window.open('/web/companyRegistration',"_self")}>Approve</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
