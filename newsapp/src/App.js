import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router";
// import LoginForm from "./components/login";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 5;
  apiKey=process.env.REACT_APP_NEWS_API_KEY;
  state = {
    progress: 0,
  };
  setProgress = (props)=>{
    this.setState({progress:props})
  }
  render() {
    return (
      <div>
        {/* {React.version} */}
        <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="general"/>} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="business"/>} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="entertainment"/>} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="general"/>} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="health"/>} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="science"/>} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="sport"/>} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="technology"/>} />
          </Routes>
        </BrowserRouter>
        {/* <News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="us" category="sport" /> */}
       {/* <LoginForm /> */}
      </div>
    );
  }
}
