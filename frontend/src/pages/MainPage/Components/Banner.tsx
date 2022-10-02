import React, { useState } from "react"
import { Box, Grid } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"
import { Banner as BannerImg } from "../../../assets/imageUrl"
import RoofB from "../../../assets/roofB.png"
import RoofL from "../../../assets/roofL.png"

import styled, { keyframes } from "styled-components"
import { slideInLeft, slideInRight } from "react-animations"

const sideRightAnimation = keyframes`${slideInRight}`
const sideLeftAnimation = keyframes`${slideInLeft}`

const SideRight = styled.div`
  animation: 1s ${sideRightAnimation};
  position: relative;
  top: 5%;
  z-index: 10;
`

const BackgroundArea = styled.div`
  overflow: hidden;
  position: absolute;
`

export default function Banner() {
  const [AZTI, setAZTI] = useState("감성 촉촉 아재")
  return (
    <BackgroundArea>
      <SideRight>
        <img src={RoofB} width="100%" />
      </SideRight>
    </BackgroundArea>
  )
}
