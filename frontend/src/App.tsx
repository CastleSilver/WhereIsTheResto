import "./App.css"

// Router
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import { useEffect, useState } from "react"

// Pages
import { mainPage, myPage, startPage, search } from "./pages/pageIndex"
import NeedConfirm from "./needConfirm/NeedConfirm"
import DetailPage from "./pages/DetailPage/RestoDetail"
// Components
import { bottomBar } from "./pages/pageIndex"
import Auth from "./pages/StartPage/Components/Auth"
import Azti from "./pages/UserComponents/Azti"
import BlockPage from "./pages/CommonComp/blockPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("1")
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)
  const [nowpPath, setNowPath] = useState(window.location.pathname)

  window.addEventListener("resize", () => {
    setBrowserWidth(window.innerWidth)
  })

  return (
    <>
      {browserWidth > 450 && <BlockPage />}
      <Router>
        <Routes>
          <Route path="/" element={startPage()} />
          <Route path="/main" element={mainPage()} />
          <Route path="/search" element={<NeedConfirm />} />
          <Route path="/my-page" element={myPage()} />
          <Route path="/restos/:restoId" element={<DetailPage />} />
          <Route path="/need-confirm" element={<NeedConfirm />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/azti" element={<Azti />} />
        </Routes>
        {nowpPath !== "/" && bottomBar()}
      </Router>
    </>
  )
}

export default App
