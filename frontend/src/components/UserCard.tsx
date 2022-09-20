import React from "react"
import { UserAlt as UserImg } from "../assets/imageUrl"
import { Box } from "@mui/material"

export default function UserCard() {
  const imgStyle = {
    borderRadius: "50%",
    overflow: "hidden",
    border: "solid 3px rgba(0, 0, 0, 0.7)",
  }

  return (
    <>
      <Box sx={imgStyle}>
        <UserImg />
      </Box>
      <span>영희(임시)</span>
      <Box sx={imgStyle}>
        <div style={{ overflow: "hidden" }}></div>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MjBfMjU4/MDAxNTYzNjAyMjY1MTM3.0fx5ORRlUPUQZSw1hTHAjtMh_U9tYLR_pYbkbxdu_4Eg.DzFeBSrL2m9m-ANpI7R4juTWA5nHTc324prWnJJKYwUg.JPEG.westar4501/%EC%96%B4%EC%A9%8C%EB%8B%A4_%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4_xr.jpg?type=w800"
          alt=""
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <span>세로가 긴 사진</span>
      <Box sx={imgStyle}>
        <img
          src="https://i.pinimg.com/originals/b7/b7/15/b7b715190586b985db6b5c46997fc54c.jpg"
          alt=""
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <span>가로가 긴 사진</span>
    </>
  )
}
