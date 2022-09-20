// Import Images file
import backgroundPaper from "./background_paper.png"
import feZero from "./feZero.jpg"
import mainLogo from "./main_logo.png"
import kakaoLoginBtn from "./kakao_login_btn.png"
// import userAlt from "./user_alt_img.png"
import userAlt from "./a.png"

export function BackPaper() {
  return <img src={backgroundPaper} width="100%" />
}

export function MainPic() {
  return <img src={feZero} width="100%" />
}

export function Logo() {
  return <img src={mainLogo} width="100%" />
}

export function KakaoBtn() {
  return <img src={kakaoLoginBtn} width="100%" />
}

export function UserAlt() {
  return <img src={userAlt} width="100%" />
}
