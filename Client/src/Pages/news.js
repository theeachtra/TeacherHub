import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./news.css";
import Search from "../Components/Search/Search";
import "../Components/Search/Search.css";
import Footer from "../Components/Footer/Footer";
import "../Components/Footer/Footer.css";
import logo from "../Components/Images/react.svg";
import news from "../Components/Images/news.png";

class News extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="React Logo" />

          <div className="title">
            <h1>Today's News</h1>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Search default="google-news" />
        <Footer />
      </div>
    );
  }
}

export default News;
