import React, { useEffect, useRef, useState } from "react";

export default function NpPdf() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          backgroundColor: "#ccc",
        }}
      >
        <div
          className="webviewer"
          style={{ height: "800px", width: "650px", borderRadius: "20px" }}
        >
          <span className="noSelectedFile ml-60 mt-20">No Selected file</span>
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
