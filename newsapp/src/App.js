import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router";
// import LoginForm from "./components/login";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        {/* {React.version} */}
        <BrowserRouter>
        <NavBar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="general"/>} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="business"/>} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="entertainment"/>} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="general"/>} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="health"/>} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="science"/>} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="sport"/>} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="technology"/>} />
          </Routes>
        </BrowserRouter>
        {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={5} country="us" category="sport" /> */}
       {/* <LoginForm /> */}
      </div>
    );
}

export default App;
