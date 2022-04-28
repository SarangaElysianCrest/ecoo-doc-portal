import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import { RoundContainer } from "../section";
import { Chip } from "@mui/material";

export default function CompRegRow({ title, value, color, icon, ...props }) {
  return (
    <div>
      <div className="grid grid-cols-12 flex flex-wrap items-center  merchant-data">
        <div className="col-span-1"></div>
        <div className="col-span-3 opacity-30">{icon || <AssignmentTwoToneIcon />}</div>
        <div className="col-span-5 sm:col-span-4">
          <div className="flex flex-wrap ">
            <div className="tran-heading-1 opacity-90">{title || ""}</div>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-4 ml-8">
          <div className="tran-heading-1">
            <Chip label={value} style={{backgroundColor: `${color}`}} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
