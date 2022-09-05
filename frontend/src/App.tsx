import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Test from "./User_components/Test";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
