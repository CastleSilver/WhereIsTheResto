import React, { useState } from "react"
import { Box } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Banner as BannerImg } from "../../../assets/imageUrl"
import Carousel from "better-react-carousel"

const backgroundArea = {
  width: "100%",
  marginBottom: "40px",
  position: "relative",
  backgroundColor: "rgb(103 122 129)",
}

const imgStyle = {
  position: "absolute",
  zIndex: 10,
}

const aztiStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  zIndex: 1,
}
export default function Banner() {
  const [AZTI, setAZTI] = useState("감성 촉촉 아재")
  return (
    <>
      <Box sx={backgroundArea}>
        <BannerImg />
      </Box>
    </>
  )
}
