import React from "react";
import RoundedButton from "./RoundedButtons";
import SelectionDropDown from "./SelectDropDown";
import TextField from "./TextField";

export default function RegistrationCard(props) {
  const designation = [
    { value: "Assistant Directo", label: "Assistant Directo" },
    {
      value: "Commercial Research Officer",
      label: "Commercial Research Officer",
    },
  ];

  return (
    <div>
      <div className="flex-col flex">
        <span className="loginText">Registration</span>
        <span className="docSubText pb-5">
          Enter your credentials to create
          <br />
          new account.
        </span>
      </div>
      <SelectionDropDown
        options={designation}
        placeholder="Designation"
        type="text"
        className="eligibilityCheckcardSelectDropDown"
      ></SelectionDropDown>
      <TextField placeholder="Name with initials" type="text"></TextField>
      <TextField placeholder="Email" type="email"></TextField>
      <TextField placeholder="Mobile Number" type="text"></TextField>
      <TextField placeholder="Password" type="password"></TextField>
      <TextField placeholder="Confirm Password" type="password"></TextField>
      <div className="flex items-center w-full flex-col">
        <RoundedButton className="loginBTN" onClick={props.handleRoute}>
          Sign up
        </RoundedButton>
      </div>
    </div>
  );
}
