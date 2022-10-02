import RoofB from "../../../assets/roofB.png"
import styled, { keyframes } from "styled-components"
import { slideInRight } from "react-animations"

const sideRightAnimation = keyframes`${slideInRight}`

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
  return (
    <BackgroundArea>
      <SideRight>
        <img src={RoofB} width="100%" />
      </SideRight>
    </BackgroundArea>
  )
}
