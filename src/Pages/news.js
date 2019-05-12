import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./news.css";
import Search from '../components/Search/Search';
import '../components/Search/Search.css';
import Footer from '../components/Footer/Footer';
import '../components/Footer/Footer.css';
import logo from '../components/Images/react.svg';
import news from '../components/Images/news.png';

class News extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="React Logo" />

          <div className="title">
            <h1>&lt;Teacher Hub News&gt;</h1>
           
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
