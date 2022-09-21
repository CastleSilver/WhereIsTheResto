import React, { useState } from "react"
import { Grid, Box } from "@mui/material"
export default function Review() {
  const initialReview = {
    restoName: "연수식당",
    imageUrl:
      "https://blog.kakaocdn.net/dn/v6qXy/btq64yD20rj/3pK2sVK7uoTqT5M7fOB2EK/img.jpg",
    rating: 4,
    content: "맛있는 집!",
  }
  const [review, setReview] = useState(initialReview)

  return (
    <>
      <Grid container display="flex" alignItems="center">
        <Grid item xs={6}>
          <img src={`${review.imageUrl}`} alt="식당 이미지" width="100%" />
        </Grid>
        <Grid item xs={6}>
          <p className="text-yellow-1">{review.restoName}</p>
          <p>내 평점: {"★".repeat(review.rating)}</p>
          <p>{review.content}</p>
        </Grid>
      </Grid>
    </>
  )
}
