import Resto from "./Resto"
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
  width: 100%;
`

export default function OtherResto({ restos }: any) {
  return (
    <Slider>
      <RowContent className="kill-scroll">
        {restos.map((resto: any, index: number) => {
          return (
            <Content key={index}>
              <Resto resto={resto} />
            </Content>
          )
        })}
      </RowContent>
    </Slider>
  )
}
