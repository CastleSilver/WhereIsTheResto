// 기타 라이브러리 Import
import { Box } from "@mui/material"

// Components Import
import ReviewComp from "./ReviewComp"

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
