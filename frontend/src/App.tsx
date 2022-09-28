import "./App.css";

// Router
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import { mainPage, myPage, startPage, search } from "./pages/pageIndex";
import NeedConfirm from "./needConfirm/NeedConfirm";
import DetailPage from "./pages/DetailPage/RestoDetail";
// Components
import { bottomBar } from "./pages/pageIndex";
import Auth from "./pages/UserComponents/Auth";
import Azti from "./pages/UserComponents/Azti";
import BlockPage from "./pages/CommonComp/blockPage";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("1");
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const [nowpPath, setNowPath] = useState(window.location.pathname);

  window.addEventListener("resize", () => {
    setBrowserWidth(window.innerWidth);
  });

  return (
    <>
      {browserWidth > 450 && <BlockPage />}
      <Router>
        <Routes>
          <Route index element={startPage()} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />

          {/* 인증을 반드시 해야지만 접속 가능한 페이지 정의 */}
          <Route element={<PrivateRoute authentication={true} />}>
            <Route path="/" element={startPage()} />
            <Route path="/main" element={mainPage()} />
            <Route path="/search" element={search()} />
            <Route path="/my-page" element={myPage()} />
            <Route path="/restos/:restoId" element={<DetailPage />} />
            <Route path="/need-confirm" element={<NeedConfirm />} />
            <Route path="/azti" element={<Azti />} />
            <Route path="*" element={startPage()} />
          </Route>
        </Routes>
        {nowpPath !== "/" && bottomBar()}
      </Router>
    </>
  );
}

export default App;
