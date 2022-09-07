import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./moduleApp.css";
import Home from "./User_components/Home";
import Login from "./User_components/Login";
import Auth from "./User_components/Auth";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
