import React from "react"
import { Box, Grid } from "@mui/material"
import userAlt from "../../assets/user_alt_img.png"

const imgAreaStyle = {
  borderRadius: "50%",
  overflow: "hidden",
  width: "25vw",
  height: "25vw",
  position: "relative",
}

const imgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

export default function UserProfile() {
  return (
    <Grid
      container
      sx={{ width: "100%" }}
      display="flex"
      direction="column"
      alignItems={"center"}
    >
      <Box sx={imgAreaStyle}>
        <Box sx={imgStyle}>
          <img
            src="https://media.istockphoto.com/photos/autumn-abstraction-long-vertical-banner-picture-id865449012"
            alt="asd"
            width="100%"
            object-fit="contain"
          />
        </Box>
      </Box>
      <p className="content-text-sm">임시 닉네임</p>
    </Grid>
  )
}
