import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

import Review from "../../CommonComp/Review"
import { useAppSelector } from "../../userStore/hooks"
import { selectResto } from "../../userStore/restoSlice"

const titleArea = {
  fontFamily: "BMEULJIRO",
  fontSize: "36px",
  color: "rgb(2 49 119)",
  textAlign: "left",
  paddingLeft: "15px",
  fontWeight: "bold",
  marginBottom: "16px",
}

const btnStyle = {
  fontSize: "4.5vw",
  padding: "0.5vw",
}

export default function Reviews() {
  const reviews = useAppSelector(selectResto)?.review
  const navigate = useNavigate()

  return (
    <>
      {reviews === undefined && <div>로딩 중</div>}
      {reviews !== undefined && (
        <>
          <Box sx={titleArea}>
            | 리-뷰 <Button onClick={() => navigate("review")}>작성</Button>
          </Box>
          {Object.keys(reviews).length === 0 && <div>리뷰가 없습니다</div>}
          {Object.keys(reviews).length !== 0 &&
            reviews.map((review, index) => {
              return (
                <Box sx={{ mb: "24px" }} key={index}>
                  <Review review={review} />
                </Box>
              )
            })}
        </>
      )}
    </>
  )
}
