import React from "react"
import PaperBackground from "../../pages/CommonComp/PaperBackground"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import PinDropIcon from "@mui/icons-material/PinDrop"
import { Box, Grid } from "@mui/material"

const resto = {
  id: 0,
  restoName: "다동황소곱창",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  rating: 4,
  imageUrl: "https://t1.daumcdn.net/cfile/tistory/99843E4F5B2F94582F",
}

const imgAreaStyle = {
  overflow: "hidden",
  width: "35vw",
  height: "35vw",
  position: "relative",
}

const imgStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

const contentStyle = {
  display: "flex",
  justifyContent: "start",
  marginTop: "8px",
}

const ratingStyle = {
  position: "absolute",
  zIndex: 1,
  color: "white",
  bottom: "10px",
  right: "10px",
  fontSize: "24px",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
}

const textLen = resto.restoName.length
const titlePx = Math.ceil(140 / textLen)

export default function RestoInfo1() {
  return (
    <div>
      <PaperBackground>
        <Grid container display="flex">
          <Grid item>
            <Box sx={imgAreaStyle}>
              <Box sx={imgStyle}>
                <img
                  src={`${resto.imageUrl}`}
                  width="100%"
                  height="100%"
                  object-fit="contain"
                />
              </Box>
            </Box>
          </Grid>
          {/* 여기서부터 음식점 이름, 내용 등의 정보 */}
          <Grid
            item
            container
            display="flex"
            direction="column"
            xs={6}
            justifyContent="center"
            alignItems="start"
            sx={{
              p: "8px",
              marginLeft: "4px",
              borderLeft: "solid 4px orange",
              paddingLeft: "16px",
            }}
          >
            <span
              className="title-text-md "
              style={{ fontFamily: "Chosun", fontWeight: "bold" }}
            >
              <span style={{ fontSize: `${titlePx}px` }}>
                {resto.restoName}
              </span>
            </span>
            <span className="content-text-md" style={contentStyle}>
              <PinDropIcon />
              {resto.address}
            </span>
            <span className="content-text-md" style={contentStyle}>
              <LocalDiningIcon />
              <Box
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "41%",
                }}
              >
                {resto.menu1}, {resto.menu2}, {resto.menu2}, {resto.menu2},{" "}
                {resto.menu2}
              </Box>
            </span>
          </Grid>
        </Grid>
      </PaperBackground>
    </div>
  )
}
