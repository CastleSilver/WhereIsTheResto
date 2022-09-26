import PaperBackground from "../../CommonComp/PaperBackground"
import React from "react"
import "./RestoInfo.css"

// MUI Import
import { Box, Grid } from "@mui/material"
import GradeIcon from "@mui/icons-material/Grade"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import PinDropIcon from "@mui/icons-material/PinDrop"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

const resto = {
  id: 0,
  restoName: "만선옥",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  imageUrl:
    "http://www.xpressengine.com/files/attach/images/122/317/660/020/d4a53463f9061da97f0dafb2c97cd366.JPG",
  x: 36.223,
  y: 123.223,
}

export default function RestoInfo() {
  return (
    <Box sx={{ marginBottom: "42px" }}>
      {/* 가게 이름 */}
      <Grid container>
        <span className="titleText" style={{ marginRight: "20px" }}>
          {resto.restoName}
        </span>
        <span className="contentText" style={{ fontSize: "28px" }}>
          ★ 4.5
        </span>
      </Grid>

      {/* 가게 이미지, 정보들 */}
      <PaperBackground>
        <Grid container wrap="wrap">
          <Grid item className="imgArea">
            <img className="restoInfoimg" src={`${resto.imageUrl}`} />
          </Grid>
          <Grid
            item
            sx={{
              marginLeft: "10px",
              borderLeft: "5px solid orange",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              paddingLeft: "12px",
              py: "3%",
            }}
          >
            <span className="contentText">
              <AccessTimeFilledIcon fontSize="medium" />| 20년
            </span>
            <span className="contentText">
              <PinDropIcon fontSize="medium" />| 영등포구
            </span>
            <span className="contentText">
              <FavoriteIcon fontSize="medium" />| 15 Likes
            </span>
          </Grid>
        </Grid>
      </PaperBackground>
    </Box>
  )
}
