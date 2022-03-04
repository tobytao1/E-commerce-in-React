import React from "react";
import { FormInput } from "./form-input.component";
import { CustomButton } from "./custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      emails: "",
      password: "",
    };
  }
  eventTrigger = (event) => {
    event.preventDefault();
    this.setState({ emails: "", password: "" });
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.eventTrigger}>
          <FormInput
            type="email"
            value={this.state.emails}
            changeHandler={this.changeHandler}
            label="email"
            name="emails"
          ></FormInput>
          <FormInput
            type="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="password"
            name="password"
          ></FormInput>
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSign>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
