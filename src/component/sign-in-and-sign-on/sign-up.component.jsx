// import React from "react";
// import { CustomButton } from "./custom-button.component";
// import { FormInput } from "./form-input.component";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

// class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }

//   async submitHandler(event) {
//     event.preventDefault();
//     const { password, confirmPassword, displayName, email } = this.state;
//     if (password !== confirmPassword) {
//       alert("passwords do not match");
//       return;
//     }

//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       await createUserProfileDocument(user, { displayName });
//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   changeHandler(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2> I do not have an account</h2>
//         <form onSubmit={this.submitHandler}>
//           <FormInput
//             type="text"
//             name="displayName"
//             label="Display Name"
//             onChange={this.changeHandler}
//             value={this.state.email}
//           ></FormInput>
//           <FormInput
//             type="email"
//             name="emails"
//             label="email"
//             onChange={this.changeHandler}
//             value={this.state.email}
//           ></FormInput>
//           <FormInput
//             type="password"
//             label="password"
//             name="password"
//             onChange={this.changeHandler}
//             value={this.state.password}
//           ></FormInput>
//           <FormInput
//             type="password"
//             label="confirmPassword"
//             name="confirmPassword"
//             onChange={this.changeHandler}
//             value={this.state.confirmPassword}
//           ></FormInput>
//           <CustomButton>Submit</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignUp;
import React from "react";

import { FormInput } from "./form-input.component";
import { CustomButton } from "./custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
