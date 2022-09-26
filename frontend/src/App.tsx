import "./App.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Pages
import { mainPage, myPage, startPage, search } from "./pages/pageIndex";
import NeedConfirm from "./needConfirm/NeedConfirm";
import DetailPage from "./pages/DetailPage/RestoDetail";
// Components
import { bottomBar } from "./pages/pageIndex";
import Auth from "./pages/StartPage/Components/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={startPage()} />
          <Route path="/main" element={mainPage()} />
          <Route path="/search" element={search()} />
          <Route path="/my-page" element={myPage()} />
          <Route path="/restos/:restoId" element={<DetailPage />} />
          <Route path="/need-confirm" element={<NeedConfirm />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
        </Routes>
        {bottomBar()}
      </Router>
    </>
  );
}

export default App;
