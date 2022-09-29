import React, { useEffect, useState } from "react"
import PaperBackground from "../../CommonComp/PaperBackground"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import PinDropIcon from "@mui/icons-material/PinDrop"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import { Box, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import "./RestoArea.scss"
import { useSelector } from "react-redux"
import { useAppSelector } from "../../userStore/hooks"
import { selectResto } from "../../userStore/restoSlice"

const recArea = {
  position: "relative",
  width: "49.5vw",
  height: "49.5vw",
  borderRadius: "15px",
  overflow: "hidden",
  marginBottom: "24px",
}

const imgStyle: {} = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const titleStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "8vw",
  textAlign: "left",
  marginBottom: "6px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  color: "rgb(216 99 69)",
}

const ratingStyle = {
  fontSize: "6vw",
  textAlign: "left",
  marginTop: "auto",
  marginBottom: "6px",
  color: "#E3B574",
}

const contentStyle: {} = {
  fontFamily: "Chosun",
  fontWeight: "bold",
  color: "black",
  margin: "0",
  fontSize: "6vw",
  textAlign: "left",
  marginBottom: "8px",
  borderBottom: "solid 2px rgba(0, 0, 0, 0.4)",
}

const iconStyle = {
  width: "6.4vw",
  height: "6.4vw",
  paddingRight: "2.5vw",
  marginTop: "auto",
  marginBottom: "auto",
}

const linkStyle: {} = {
  textDecoration: "none",
}

export default function RestoArea() {
  const resto = useAppSelector(selectResto)

  const isLong = (word: string) => {
    return word.length >= 10
  }

  return (
    <div>
      <PaperBackground>
        {resto === undefined && <div>로딩 중 </div>}
        {resto !== undefined && (
          <Grid sx={{ padding: "18px" }}>
            {/* 제목, 별점 */}
            <Grid
              container
              sx={{
                marginBottom: "4.5vw",
              }}
            >
              <Grid item xs={12} sx={titleStyle} className="text-container">
                <span className={isLong(resto.name) ? "animate" : ""}>
                  {resto.name}
                </span>
              </Grid>
            </Grid>

            {/* 이미지, 기타 정보들 */}
            <Grid container>
              <Grid item xs={12} sx={recArea}>
                <img src={resto.thumbnail} style={imgStyle} />
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="column"
                justifyContent={"space-evenly"}
                alignContent={"start"}
                sx={{ paddingLeft: "10px" }}
              >
                <Grid container justifyContent={"space-between"}>
                  <Grid
                    item
                    container
                    xs={6}
                    sx={{ ...contentStyle, fontSize: "6.5vw" }}
                  >
                    ★ {Number(resto.rating).toFixed(1)}
                  </Grid>

                  <Grid item container sx={contentStyle} xs={6}>
                    <AccessTimeFilledIcon sx={iconStyle} />
                    20년
                  </Grid>
                </Grid>

                <Grid container sx={contentStyle}>
                  <PinDropIcon sx={iconStyle} />
                  {resto.address}
                </Grid>

                <Grid container sx={contentStyle}>
                  <LocalDiningIcon sx={iconStyle} />
                  <Box
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      width: "80%",
                    }}
                  >
                    {resto.menu1}, {resto.menu2}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </PaperBackground>
    </div>
  )
}
