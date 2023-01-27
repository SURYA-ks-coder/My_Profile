import React from "react";
import Section1 from "./Main_Content/Section1";
import Section2 from "./Main_Content/Section2";
import Section3 from "./Main_Content/Section3";
import Section4 from "./Main_Content/Section4";
import Section7 from "./Main_Content/Section7";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Final_Index() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 />
    </div>
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/about" element={<Section1 />} />
    //       <Route path="/Portfolio" element={<Section2 />} />
    //       <Route path="/Contact" element={<Section3 />} />
    //       <Route path="/Blog" element={<Section4 />} />
    //       <Route path="/Resume" element={<Section7 />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default Final_Index;
