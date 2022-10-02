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

export default function UserProfile({ userInfo }: any) {
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
            src={`${userInfo.profileImageURL}`}
            alt="asd"
            width="100%"
            object-fit="contain"
          />
        </Box>
      </Box>
      <p className="content-text-sm">{userInfo.nickname}</p>
    </Grid>
  )
}
