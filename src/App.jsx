import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";

function App() {
  const URL = import.meta.env.VITE_API_KEY;
  // const apiKey = process.env.URL
  // fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`)
  // .then((data) => data.json())
  // .then(res => console.log(res))  


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SearchBar URL={URL}/>} />
       </Routes>
    </Router>
  );
}

export default App;
