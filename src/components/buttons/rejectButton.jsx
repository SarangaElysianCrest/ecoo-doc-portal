import React, { Component } from "react";
import RejectDialog from "../alerts/rejectPrompt";
import RoundedButton from "./RoundedButtons";

export default function RejectButton({ open,onClick, ...props }) {
  return (
    <>
      <RoundedButton
        ref={undefined}
        onClick={onClick}
        className="pdfRejectBTN mx-5"
        type="submit"
      >
        Reject
      </RoundedButton>
      <RejectDialog
        handleClickOpen={props.handleClickOpen}
        handleClose={props.handleClose}
        isOpen={open}
      />
    </>
  );
}
