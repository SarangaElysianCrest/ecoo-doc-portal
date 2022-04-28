import { Button } from "@material-ui/core";
import React, { Component } from "react";

export default function FileViewButton(props) {
  const {onClick} = props;
  return (
    <>
      {/* <div>
        <div className="fileUploadButton relative">
          <div className="absolute top-4 right-5">
            <img
              // loader ={() => LoginPageImage}
              src={props.image}
              alt="Picture of the author"
              width={21}
              height={21}
            />
          </div>
        </div>
      </div> */}
      <Button
        variant="contained"
        endIcon={props.image}
        style={{ textTransform: "none" }}
        onClick={()=>onClick(props.path)}
      >
        {props.text}
      </Button>
    </>
  );
}
