import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./message.css";
import ChatApp from "../Components/MessageApp/ChatApp";

require("../Components/MessageApp/messageApp.css");
require("../Components/MessageApp/Login.css");

class MessageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };

    // Bind 'this' to event handlers. React ES6 does not do this by default
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      // Form was submitted, now show the main App
      return <ChatApp username={this.state.username} />;
    }

    // Initial page load, show a simple login form
    return (
      <form
        onSubmit={this.usernameSubmitHandler}
        className="username-container"
      >
        <h1>TeacherHub Chat Room</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
MessageApp.defaultProps = {};

export default MessageApp;
