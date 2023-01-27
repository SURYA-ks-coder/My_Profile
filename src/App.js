import "./App.css";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalIndex from "./Components/FinalIndex";
import Fotter from "./Components/Fotter/Fotter";
import Section2 from "./Components/Main_Content/Section2";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<FinalIndex />} />
          {/* <Route path="/about" element={<Section2 />} /> */}
        </Routes>
        <Fotter />
      </div>
    </Router>
  );
}

export default App;
