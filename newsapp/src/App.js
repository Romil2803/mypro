import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import { BrowserRouter, Routes, Route } from "react-router";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* {React.version} */}
        <NavBar />
        <News pageSize={5} country="us" category="sport" />
       
      </div>
    );
  }
}
