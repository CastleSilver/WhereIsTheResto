import Resto from "./Resto"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

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
  width: 85%;
`

export default function OtherResto({ restos }: any) {
  const navigate = useNavigate()
  return (
    <Slider>
      <RowContent className="kill-scroll">
        {restos.map((resto: any, index: number) => {
          return (
            <Content
              key={index}
              onClick={() => {
                navigate(`/restos/${resto.id}`)
              }}
            >
              <Resto resto={resto} />
            </Content>
          )
        })}
      </RowContent>
    </Slider>
  )
}
