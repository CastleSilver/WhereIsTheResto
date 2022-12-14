import PaperBackground from "../../pages/CommonComp/PaperBackground"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import PinDropIcon from "@mui/icons-material/PinDrop"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import { Box, Grid } from "@mui/material"
import { Link } from "react-router-dom"

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
  borderRadius: "5%",
}

const fontOver = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}

const titleStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "8vw",
  textAlign: "left",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  // color: "rgb(216 99 69)",
  color: "rgb(2 49 119)",
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
  fontSize: "5vw",
  textAlign: "left",
}

const iconStyle = {
  paddingRight: "2.5vw",
  fontSize: "6.1vw",
}

const linkStyle: {} = {
  textDecoration: "none",
}

export default function RestoInfo1({ resto }: any) {
  const temp = resto.address.split(" ")
  const address = temp[1]
  return (
    <div>
      <Link to={`/restos/${resto.restoId}`} style={linkStyle}>
        <PaperBackground>
          <Grid sx={{ py: "12px", px: "5vw" }}>
            {/* 제목, 별점 */}
            <Grid
              container
              sx={{
                // borderBottom: "solid 4px rgba(0, 0, 0, 0.3)",
                marginBottom: "4.5vw",
              }}
            >
              <Grid item xs={12} sx={titleStyle}>
                <span>{resto.name}</span>
              </Grid>
            </Grid>

            {/* 이미지, 기타 정보들 */}
            <Grid container>
              <Grid item xs={6.5} sx={recArea}>
                <img src={resto.imageUrl} style={imgStyle} />
              </Grid>
              <Grid
                item
                xs={5.5}
                container
                direction="column"
                justifyContent={"space-evenly"}
                alignContent={"start"}
                sx={{ paddingLeft: "10px" }}
              >
                <Grid container sx={contentStyle} alignContent="center">
                  <Grid item xs={3}>
                    <AccessTimeFilledIcon sx={iconStyle} />
                  </Grid>
                  <Grid item xs={9} sx={fontOver}>
                    {resto.age} 년
                  </Grid>
                </Grid>

                <Grid container sx={contentStyle} alignContent="center">
                  <Grid item xs={3}>
                    <PinDropIcon sx={iconStyle} />
                  </Grid>
                  <Grid item xs={9} sx={fontOver}>
                    {address}
                  </Grid>
                </Grid>

                <Grid
                  container
                  sx={{ ...contentStyle, ...fontOver }}
                  alignContent="center"
                >
                  <Grid item xs={3}>
                    <LocalDiningIcon sx={iconStyle} />
                  </Grid>
                  <Grid item xs={9} sx={fontOver}>
                    {resto.menu1}
                  </Grid>
                </Grid>
                <Grid container sx={{ ...contentStyle }} alignContent="center">
                  {resto.menu2 && (
                    <>
                      <Grid item xs={3}>
                        <LocalDiningIcon sx={iconStyle} />
                      </Grid>
                      <Grid item xs={9} sx={fontOver}>
                        {resto.menu2}
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </PaperBackground>
      </Link>
    </div>
  )
}
