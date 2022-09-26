import { Box } from "@mui/system"
import React from "react"

const boxStyle = {
  position: "absolute",
  width: "100vw",
  height: "100vh",
  left: 0,
  backgroundColor: "rgba(217, 217, 217, 0.9)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}

export default function blockPage() {
  return (
    <Box sx={boxStyle}>
      <p>PC 환경은 지원하지 않습니다!</p>
      <p>모바일 환경 혹은 작은 크기의 브라우저로 접속해주세요</p>
    </Box>
  )
}
