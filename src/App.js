import "./App.css";
import HomePage from "./component/homepage/homepage.component.jsx";
import { Route, Routes } from "react-router-dom";
import Shop from "./component/shop/shop.component.jsx";
import { Header } from "./component/header/header.component.jsx";
import SignPage from "./component/sign-in-and-sign-on/sign-in-and-sign-on.component";
import React from "react";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
    };
  }

  unsubscribe = null;
  componentDidMount = () => {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({ userName: user });
      console.log(user);
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    return (
      <div>
        <Header userName={this.state.userName} />
        <Routes>
          <Route exact={false} path="/" element={<HomePage />} />
          <Route path="/:id" element={<Shop />}></Route>
          <Route path="/sign" element={<SignPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
