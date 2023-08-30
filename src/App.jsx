import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import Show from "./Components/Show";

function App() {
  const URL = import.meta.env.VITE_API_KEY;

  return (
    <div className="container-fluid mb-5">
      <div className="row d-md-block d-none">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<SearchBar URL={URL} />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/video/:videoId" element={<Show URL={URL}/>} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
