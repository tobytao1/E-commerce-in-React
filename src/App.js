import "./App.css";
import HomePage from "./component/homepage/homepage.component.jsx";
import { Route, Routes } from "react-router-dom";
import Shop from "./component/shop/shop.component.jsx";
import { Header } from "./component/header/header.component.jsx";
import SignPage from "./component/sign-in-and-sign-on/sign-in-and-sign-on.component";
import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: null,
    };
  }

  // unsubscribe = null;
  // componentDidMount = () => {
  //   this.unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const userRef = await createUserProfile(user);
  //       onSnapshot(userRef, (snapshot) => {
  //         console.log(snapshot);
  //         // this.setState({
  //         // })
  //       });
  //     }
  //   });
  // };

  // componentWillUnmount = () => {
  //   this.unsubscribe();
  // };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Now calls `onSnapshot` as a function; DocumentReference passed as first argument
        // and callback function is now the second argument
        onSnapshot(userRef, (snapshot) => {
          this.setState(
            {
              userName: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state.userName);
            }
          );
        });
      } else {
        // user is not signed in, so userAuth will be null
        this.setState({ userName: userAuth }, () => {
          console.log(this.state.userName);
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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
