import "./App.css"

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Pages
import StartPage from "./pages/StartPage/StartPage"
import MainPage from "./pages/MainPage/MainPage"
import AllComponents from "./pages/AllComponents"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/dev" element={<AllComponents />} />
      </Routes>
    </Router>
  )
}

export default App
