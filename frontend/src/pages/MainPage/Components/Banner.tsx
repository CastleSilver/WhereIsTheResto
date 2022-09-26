import React from "react"
import { Box } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Banner as BannerImg } from "../../../assets/imageUrl"
import Carousel from "better-react-carousel"

const backgroundArea = {
  width: "100%",
  marginBottom: "40px",
  position: "static",
  backgroundColor: "rgb(103 122 129)",
}
export default function Banner() {
  return (
    <>
      <Box sx={backgroundArea}>
        <BannerImg />
      </Box>
    </>
  )
}
