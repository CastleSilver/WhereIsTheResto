import { Grid, Box } from "@mui/material"
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
      <Grid container display="flex" spacing={1}>
        <Grid item xs={7}>
          <Box
            sx={{ borderRadius: "24px", overflow: "hidden", height: "135px" }}
          >
            <img
              src="https://blog.kakaocdn.net/dn/v6qXy/btq64yD20rj/3pK2sVK7uoTqT5M7fOB2EK/img.jpg"
              alt="임시 이미지"
              width="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={5} alignItems="center">
          <p className="text-yellow-0">{rst.title}</p>
          <p className="text-orange-2">경력: {rst.old}</p>
          <p className="text-orange-2">위치: {rst.location}</p>
        </Grid>
      </Grid>
    </>
  )
}
