import Resto from "./Resto"
import { Grid } from "@mui/material"
import styled from "styled-components"

const Slider = styled.div`
  position: relative;
`

const RowContent = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-column: column;
  scroll-behavior: smooth;
`
const Content = styled.div`
  margin-right: 4vw;
  zindex: 60;
`

export default function OtherResto({ restos }: any) {
  return (
    <Slider>
      <RowContent>
        {restos.map((resto: any) => {
          return (
            <Content>
              <Resto resto={resto} />
            </Content>
          )
        })}
      </RowContent>
    </Slider>
  )
}
