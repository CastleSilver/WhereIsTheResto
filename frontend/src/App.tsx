import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./moduleApp.css";
import Home from "./User_components/Home";
import Auth from "./User_components/Auth";
import Azti from "./User_components/Azti";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/azti" element={<Azti />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
