import React from "react"
import PaperBackground from "./PaperBackground"
import { Box, Grid } from "@mui/material"
//   {
//     id: 0,
//     restoName: "만선옥",
//     address: "연신내",
//     content:
//       "이 집에서 파는 모든 메뉴가 맛있어요... 진짜 안 가보셨다면 꼭 가보세요!",
//     rating: 4,
//   },

interface revType {
  review: {
    id: number
    restoName: string
    address: string
    content: string
    rating: number
    imageUrl: string
  }
}

const imgAreaStyle = {
  overflow: "hidden",
  width: "40vw",
  height: "40vw",
  position: "relative",
}

const imgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

export default function Review({ review }: revType) {
  return (
    <div>
      <PaperBackground>
        <Grid container wrap="" display="flex">
          <Grid item>
            <Box sx={imgAreaStyle}>
              <Box sx={imgStyle}>
                <img
                  src={`${review.imageUrl}`}
                  width="100%"
                  height="100%"
                  object-fit="contain"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            display="flex"
            direction="column"
            justifyContent="center"
            sx={{ p: "8px" }}
          >
            <span className="title-text-md" style={{ textAlign: "center" }}>
              {review.restoName}
            </span>
            <span style={{ color: "orange", fontSize: "24px" }}>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </span>
            <span>{review.content}</span>
          </Grid>
        </Grid>
      </PaperBackground>
    </div>
  )
}
