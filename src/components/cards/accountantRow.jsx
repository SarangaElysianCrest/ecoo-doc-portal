import React from "react";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import { Chip } from "@mui/material";
import Accept from "@mui/icons-material/CheckSharp";
import Reject from "@mui/icons-material/ClearRounded";

export default function AccountantRow({ title, value, color, icon, ...props }) {
  return (
    <div>
      <div className="grid grid-cols-12 flex flex-wrap items-center  merchant-data">
        <div className="col-span-1"></div>
        <div className="col-span-3 sm:col-span-3">
          <div className="flex flex-wrap ">
            <div className="tran-heading-1">{title || ""}</div>
          </div>
        </div>
        <div className="col-span-3 sm:col-span-3">
          <div className="flex flex-wrap ">
            <div className="tran-heading-1 flex">
              <Chip label="view" size="small" style={{ backgroundColor: `#cab7eb`,color: `#7d42ad`}} />&nbsp;
              <Chip label="view" size="small" style={{ backgroundColor: `#ebd3b7`,color: `#a8702f`}} />
            </div>
          </div>
        </div>
        <div className="col-span-5 sm:col-span-4 ml-8">
          <div className="tran-heading-1 flex">
            <Chip
              size="small"
              label={<Accept fontSize="inherit" />}
              style={{ backgroundColor: `#1ec75c` }}
            ></Chip>
            &nbsp;
            <Chip
              size="small"
              label={<Reject fontSize="inherit" />}
              style={{ backgroundColor: `#d95757` }}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
