import "./App.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import StartPage from "./pages/StartPage/StartPage";
import MainPage from "./pages/MainPage/MainPage";
import AllComponents from "./pages/AllComponents";
import SearchPage from "./pages/SearchPage/SearchPage";
import MyPage from "./pages/MyPage/MyPage";
import BottomBar from "./components/BottomBar";
import Auth from "./UserComponents/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/dev" element={<AllComponents />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
      </Routes>
      <BottomBar />
    </Router>
  );
}

export default App;
