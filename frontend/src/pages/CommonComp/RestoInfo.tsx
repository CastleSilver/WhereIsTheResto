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
  fontSize: "7vw",
  textAlign: "left",
}

const iconStyle = {
  paddingRight: "2.5vw",
  fontSize: "7.6vw",
}

const linkStyle: {} = {
  textDecoration: "none",
}

export default function RestoInfo1({ resto }: any) {
  const temp = resto.address.split(" ")
  const address = temp[1]
  return (
    <div>
      <Link to={`/restos/${resto.id}`} style={linkStyle}>
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
              <Grid item xs={12} sx={titleStyle}>
                <span>{resto.name} asdfasdfasdfasdfasdf</span>
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
                <Grid container sx={contentStyle} alignContent="center">
                  <AccessTimeFilledIcon sx={iconStyle} />
                  {resto.age}년
                </Grid>

                <Grid container sx={contentStyle} alignContent="center">
                  <PinDropIcon sx={iconStyle} />
                  {address}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </PaperBackground>
      </Link>
    </div>
  )
}
