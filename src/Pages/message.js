import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './message.css';


export default class Message extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        value: '',
      };
  
      this.onChange = this.onChange.bind(this);
    }
  
    onChange(event) {
      this.setState({ value: event.target.value });
    }
  
    render() {
      return (
        <div>
          <h1>Hello React ES6 Class Component!</h1>
  
          <input
            value={this.state.value}
            type="text"
            onChange={this.onChange}
          />
  
          <p>{this.state.value}</p>
        </div>
      );
    }
  }
  
