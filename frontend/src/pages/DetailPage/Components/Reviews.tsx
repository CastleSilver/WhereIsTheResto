import { Box, Button, Grid } from "@mui/material"
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
  fontSize: "7.5vw",
  width: "100%",
  p: 0,
  m: 0,
}

export default function Reviews() {
  const reviews = useAppSelector(selectResto)?.review
  const navigate = useNavigate()

  return (
    <>
      {reviews === undefined && <div>로딩 중</div>}
      {reviews !== undefined && (
        <>
          <Grid container sx={titleArea} justifyContent="space-between">
            <Grid item>| 리-뷰</Grid>
            <Grid item>
              <Box sx={btnStyle} onClick={() => navigate("review")}>
                작성
              </Box>
            </Grid>
          </Grid>
          {Object.keys(reviews).length === 0 && <div>리뷰가 없습니다</div>}
          {Object.keys(reviews).length !== 0 &&
            reviews.map((review: any, index) => {
              return (
                <Box sx={{ mb: "24px" }} key={review.id}>
                  <Review review={review} />
                </Box>
              )
            })}
        </>
      )}
    </>
  )
}
