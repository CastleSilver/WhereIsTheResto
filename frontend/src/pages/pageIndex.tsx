// Pages 들
import MainPage from "./MainPage/MainPage"
import MyPage from "./MyPage/MyPage"
import StartPage from "./StartPage/StartPage"

// Components 들
import BottomBar from "./CommonComp/BottomBar"
import SearchPage from "./SearchPage/SearchPage"

export const mainPage = () => {
  return <MainPage />
}

export const myPage = () => {
  return <MyPage />
}

export const startPage = () => {
  return <StartPage />
}

export const bottomBar = () => {
  return <BottomBar />
}

export const search = () => {
  return <SearchPage />
}
