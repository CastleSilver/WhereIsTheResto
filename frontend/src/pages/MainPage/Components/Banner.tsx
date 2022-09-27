import React, { useState } from "react"
import { Box, Grid } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Banner as BannerImg } from "../../../assets/imageUrl"
import Carousel from "better-react-carousel"

const backgroundArea = {
  width: "100%",
  marginBottom: "40px",
  position: "relative",
  backgroundColor: "rgb(103 122 129)",
  paddingTop: "191.72px",
}

const imgStyle = {
  position: "absolute",
  top: 0,
}

const aztiStyle = {
  position: "absolute",
  top: "35%",
  left: "25%",
  width: "67%",
  height: "50%",
  whiteSpace: "normal",
  wordBreak: "normal",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  fontSize: "7vw",
  color: "rgba(255, 255, 255, 0.9)",
}
export default function Banner() {
  const [AZTI, setAZTI] = useState("감성 촉촉 아재")
  return (
    <>
      <Box sx={backgroundArea}>
        <Box sx={imgStyle}>
          <BannerImg />
        </Box>
        <Box sx={aztiStyle}>
          <span>감성 촉촉 노력형인 아재인데 MZ세대인 아재</span>
        </Box>
      </Box>
    </>
  )
}
