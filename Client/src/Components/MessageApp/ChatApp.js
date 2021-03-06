import React from "react";
import io from "socket.io-client";
import config from "../MessageConfig/index";

import Messages from "../MessageApp/Messages";
import ChatInput from "../MessageApp/ChatInput";

require("../MessageApp/ChatApp.css");

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    this.socket = io(config.api, {
      query: `username=${props.username}`
    }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    this.socket.emit("client:message", messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="chat-container">
        <h3>React Chat App</h3>
        <div className="chat-messages">
          <Messages messages={this.state.messages} />
        </div>
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }
}
ChatApp.defaultProps = {
  username: "Anonymous"
};

export default ChatApp;
