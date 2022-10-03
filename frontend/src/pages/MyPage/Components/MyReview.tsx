import styled from "styled-components"
import ReviewComp from "./ReviewComp"
import { Box } from "@mui/material"

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

export default function MyReview({ reviews }: any) {
  return (
    <div>
      {reviews.map((review: any, index: number) => {
        return (
          <Box sx={{ marginBottom: "30px" }} key={index}>
            <ReviewComp review={review} />
          </Box>
        )
      })}
    </div>
  )
}
