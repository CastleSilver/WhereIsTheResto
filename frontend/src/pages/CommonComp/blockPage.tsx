import { Box } from "@mui/system"
import React from "react"

const boxStyle = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  left: 0,
  backgroundColor: "rgba(217, 217, 217, 0.9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  zIndex: "20",
}

const fontStyle = {
  fontSize: "4vw",
}
export default function blockPage() {
  return (
    <Box sx={boxStyle}>
      <p style={fontStyle}>PC 환경은 지원하지 않습니다!</p>
      <p style={fontStyle}>
        모바일 혹은 개발자 도구로 모바일 환경을 구축해주세요!
      </p>
    </Box>
  )
}
