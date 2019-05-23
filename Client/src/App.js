import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Message from "./Pages/message";
import News from "./Pages/news";
import Contact from "./Pages/contact";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Components/Authentication/firebaseConfig";

// start test

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <BrowserRouter>
        <div className="App">
          <header>
            {user ? <p id="name"> Hello, {user.displayName}</p> : ""}

            {user ? (
              <button onClick={signOut}>Sign out</button>
            ) : (
              <button onClick={signInWithGoogle}>
                Teacher's Sign in with Google
              </button>
            )}
            <nav role="navigation">
              <ul className="navbar nav nav-pills nav-fill bg-dark">
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="nav-link active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="nav-link active"
                    to="/message"
                  >
                    Teacher Chat
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="nav-link active"
                    to="/news"
                  >
                    Today's News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="nav-link active"
                    to="/contact"
                  >
                    Contact Page
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/message" component={Message} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
