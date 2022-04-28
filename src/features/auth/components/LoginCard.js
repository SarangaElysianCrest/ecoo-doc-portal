import React from "react";
import RoundedButton from "./RoundedButtons";
import TextField from "./TextField";

function LoginCard() {
  return (
    <div>
      <div className="flex-col flex">
        <span className="loginText">Login</span>
        <span className="docSubText pb-5">
          Enter your credentials to access
          <br />
          your account.
        </span>
      </div>
      <TextField placeholder="Email" type="email"></TextField>
      <TextField placeholder="Password" type="password"></TextField>
      <div className="flex items-center w-full flex-col">
        <RoundedButton className="loginBTN">
          <a href="/web/overview">Login</a>
        </RoundedButton>
        <a href="#" className="forgotPassword">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default LoginCard;
