import React from "react";
import SignIn from "./sign-in.component";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "./sign-up.component";

const SignPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};
export default SignPage;
