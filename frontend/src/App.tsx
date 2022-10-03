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
import PrivateRoute from "./PrivateRoute"

import { createTheme, ThemeProvider } from "@mui/material"

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "rgb(77, 152, 182)",
        light: "#ff9100",
      },
    },
    typography: {
      fontFamily: "BMEULJIRO",
    },
  })
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setBrowserWidth(window.innerWidth)
  })

  return (
    <ThemeProvider theme={theme}>
      {browserWidth > 450 && <BlockPage />}
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/azti" element={<Azti />} />
          <Route path="/oauth/kakao/callback" element={<Auth />} />
          <Route element={<PrivateRoute authentication={true} />}>
            <Route path="/*" element={<IndexPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
