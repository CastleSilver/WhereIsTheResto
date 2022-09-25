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
    </>
  )
}
