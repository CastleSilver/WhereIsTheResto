import React from "react"
import PaperBackground from "../../pages/CommonComp/PaperBackground"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import PinDropIcon from "@mui/icons-material/PinDrop"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import { Box, Grid } from "@mui/material"
import { Link } from "react-router-dom"

const resto = {
  id: 0,
  restoName: "다동황소곱창",
  address: "연신내",
  menu1: "노가리",
  menu2: "팥빙수",
  rating: 4,
  imageUrl:
    "https://blog.kakaocdn.net/dn/1udE5/btq66utR1gh/Dff4S5fRbKKqVigtrykWiK/img.jpg",
}

const recArea = {
  position: "relative",
  width: "49.5vw",
  height: "35vw",
  borderRadius: "15px",
  overflow: "hidden",
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
  textOverflow: "ellipsis",
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
  fontSize: "4.5vw",
  textAlign: "left",
}

const iconStyle = {
  width: "6.4vw",
  height: "6.4vw",
  paddingRight: "2.5vw",
}

const linkStyle: {} = {
  textDecoration: "none",
}

export default function RestoInfo1() {
  return (
    <div>
      <Link to={`/restos/${1}`} style={linkStyle}>
        <PaperBackground>
          <Grid sx={{ padding: "18px" }}>
            {/* 제목, 별점 */}
            <Grid
              container
              sx={{
                // borderBottom: "solid 4px rgba(0, 0, 0, 0.3)",
                marginBottom: "4.5vw",
              }}
            >
              <Grid item xs={9.2} sx={titleStyle}>
                <span>{resto.restoName} asdfasdfasdfasdfasdf</span>
              </Grid>
              <Grid item xs={2.8} sx={ratingStyle}>
                <span>★ {resto.rating.toFixed(1)}</span>
              </Grid>
            </Grid>

            {/* 이미지, 기타 정보들 */}
            <Grid container>
              <Grid item xs={5.5} sx={recArea}>
                <img src={resto.imageUrl} style={imgStyle} />
              </Grid>
              <Grid
                item
                xs={6.5}
                container
                direction="column"
                justifyContent={"space-evenly"}
                alignContent={"start"}
                sx={{ paddingLeft: "10px" }}
              >
                <Grid container sx={contentStyle}>
                  <AccessTimeFilledIcon sx={iconStyle} />
                  20년
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
                      width: "70%",
                    }}
                  >
                    {resto.menu1}, {resto.menu2}, asdfasdfasfasdf
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </PaperBackground>
      </Link>
    </div>
  )
}
