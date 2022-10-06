// 기타 라이브러리 Import
import { Box } from "@mui/material"
import { useState } from "react"
// Components Import
import ReviewComp from "./ReviewComp"

const emptyStyle = {
  fontSize: "11vw",
  wordBreak: "keep-all",
}

export default function MyReview({ reviews }: any) {
  const [myReviews, setMyReviews] = useState([...reviews])
  const onDelete = (id: any) => {
    let delId = 0
    myReviews.forEach((rev: any, index: number) => {
      if (rev.id === id) {
        delId = index
      }
    })
    myReviews.splice(delId, 1)
    setMyReviews([...myReviews])
  }

  return (
    <div>
      {reviews.length === 0 && (
        <Box sx={emptyStyle}>"아직 남기신 리뷰가 없습니다"</Box>
      )}

      {myReviews.map((review: any, index: number) => {
        return (
          <Box sx={{ marginBottom: "30px" }} key={review.id}>
            <ReviewComp review={review} onDelete={onDelete} />
          </Box>
        )
      })}
    </div>
  )
}
