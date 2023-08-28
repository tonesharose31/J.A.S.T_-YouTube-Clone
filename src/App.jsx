import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";

function App() {
  const URL = import.meta.env.VITE_API_KEY; 


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchBar URL={URL}/>} />
        <Route path="/about" element={<AboutMe />} />
       </Routes>
    </Router>
  );
}

export default App;
