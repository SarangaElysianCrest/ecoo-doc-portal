import React, { Component } from "react";

export default function DigitalSign({path}) {
  return (
    <img
      className="border shadow-lg mt-5"
      alt={"No Sign"}
      src={path || "/image/sign-1.png"}
      width="20%"
    />
  );
}
