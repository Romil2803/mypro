import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
// import { NavLink } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>
     <BrowserRouter>
     <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  </NoteState>
    </>
  )
}

export default App
