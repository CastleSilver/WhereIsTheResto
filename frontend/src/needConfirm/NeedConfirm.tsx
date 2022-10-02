import React from "react"

export default function NeedConfirm() {
  const user = localStorage.getItem("login-kakao")
  console.log(user)
  return <div>NeedConfirm</div>
}
