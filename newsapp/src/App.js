import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router";

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        {/* {React.version} */}
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<News pageSize={5} country="us" category="general"/>} />
            <Route path="/business" element={<News pageSize={5} country="us" category="business"/>} />
            <Route path="/entertainment" element={<News pageSize={5} country="us" category="entertainment"/>} />
            <Route path="/general" element={<News pageSize={5} country="us" category="general"/>} />
            <Route path="/health" element={<News pageSize={5} country="us" category="health"/>} />
            <Route path="/science" element={<News pageSize={5} country="us" category="science"/>} />
            <Route path="/sports" element={<News pageSize={5} country="us" category="sport"/>} />
            <Route path="/technology" element={<News pageSize={5} country="us" category="technology"/>} />
          </Routes>
        </BrowserRouter>
        {/* <News pageSize={5} country="us" category="sport" /> */}
       
      </div>
    );
  }
}
