import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comonents/Navbar";
import About from "./comonents/About";
import Home from "./comonents/Home";
import NoteState from "./context/notes/NoteState";
import Login from "./comonents/Login";
import Signup from "./comonents/Signup";

function App() {
  return (
   <>
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      
      </NoteState>
      </>
  );
}

export default App;
