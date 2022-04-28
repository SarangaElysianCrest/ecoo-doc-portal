import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyle = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
  },
  tableHeaderCell: {
    backgroundColor: "#f7f7fa",
    fontFamily: "$Poppins",
    fontWeight: 600,
    fontSize: "13px",
    color: "#8a8da4;",
    textAlign: "left",
    marginLeft: "10px",
  },
  tableBodyCell: {
    fontWeight: 550,
    fontSize: "13px",
    fontFamily: "$Poppins",
    textAlign: "left",
    // "&:hover": {
    //     backgroundColor: "#f7f7fa !important"
    //   }
  },

  tableRow: {
    backgroundColor: "#ffffff;",
    "&:hover": {
      backgroundColor: "#e5e5ee !important",
    },
  },

  box: {
    boxShadow: "0px 24px 72px 0 rgb(150 152 169 / 33%)",
  },
}));

const RequestTable = (props) => {};

export default RequestTable;
