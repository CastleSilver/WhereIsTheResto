import { Grid } from "@mui/material"
import React from "react"

export default function RstInfo() {
  const rst = {
    title: "대한옥",
    old: "20년",
    location: "영등포",
    like: 13,
  }
  return (
    <>
      <Grid container display="flex" spacing={2}>
        <Grid item xs={6}>
          <img
            src="https://blog.kakaocdn.net/dn/v6qXy/btq64yD20rj/3pK2sVK7uoTqT5M7fOB2EK/img.jpg"
            alt="임시 이미지"
            width="100%"
          />
        </Grid>
        <Grid item xs={6}>
          <p>{rst.title}</p>
          <p>{rst.old}</p>
          <p>{rst.location}</p>
        </Grid>
      </Grid>
    </>
  )
}
