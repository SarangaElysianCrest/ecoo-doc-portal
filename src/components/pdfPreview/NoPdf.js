import React, { useEffect, useRef, useState } from "react";
import nodataImage from "../../assets/DOC/undraw_no_data_re_kwbl.svg";
export default function NpPdf() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "70vh",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderWidth: "5px",
          borderColor: "#e9e9e9;",
          borderRadius: "20px",
        }}
      >
        <div
          className="webviewer pt-20"
          style={{ height: "800px", width: "650px", borderRadius: "20px" }}
        >
          <span className="noSelectedFile ml-72 ">No Selected file</span>
          <img
            className="ml-40 mt-10 opacity-50 "
            width={300}
            height={300}
            src={nodataImage}
          />
        </div>
        <div
          className="buttonContainer"
          style={{
            height: "50px",
            width: "750px",
            borderRadius: "20px",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></div>
      </div>
    </React.Fragment>
  );
}
