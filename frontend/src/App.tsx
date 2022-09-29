import "./App.css"

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"

// Components
import Auth from "./pages/UserComponents/Auth"
import Azti from "./pages/UserComponents/Azti"
import BlockPage from "./pages/CommonComp/blockPage"
import StartPage from "./pages/StartPage/StartPage"
import IndexPage from "./pages/IndexPage"

function App() {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setBrowserWidth(window.innerWidth)
  })

  return (
    <>
      {browserWidth > 450 && <BlockPage />}
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/azti" element={<Azti />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route path="/*" element={<IndexPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
