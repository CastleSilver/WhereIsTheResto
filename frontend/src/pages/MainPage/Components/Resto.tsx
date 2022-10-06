// React 시스템 Import

// 기타 라이브러리 Import
import { Avatar, Box, Grid } from "@mui/material"
import PinDropIcon from "@mui/icons-material/PinDrop"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded"

// Components Import
import PaperBackground from "../../CommonComp/PaperBackground"

export default function Resto({ resto }: any) {
  const wholeFrame = {
    padding: "15px",
  }

  const imgFrame = {
    width: "100%",
    height: "60vw",
    overflow: "hidden",
    borderRadius: "5px",
    position: "relative",
  }

  const imgStyle = {
    width: "100%",
  }

  const fontOver = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }

  const titleStyle = {
    fontFamily: "BMEULJIRO",
    fontSize: "9vw",
    textAlign: "left",
    // color: "rgb(216 99 69)",
    color: "rgb(2 49 119)",
    ...fontOver,
  }

  const undLine = {
    borderBottom: "solid 2px rgba(0, 0, 0, 0.9)",
  }

  return (
    <PaperBackground>
      <Box sx={wholeFrame}>
        {/* 가게 이름 */}
        <Grid container alignItems="end" sx={{ pb: "12px" }}>
          <Grid item xs={9} sx={{ ...titleStyle, ...fontOver }}>
            {resto.resto_name}
          </Grid>
          <Grid
            item
            container
            xs={3}
            sx={{ fontSize: "6vw", textAlign: "center", color: "#E3B574" }}
          >
            ★ {resto.rating ? resto.rating.toFixed(1) : 0}
          </Grid>
        </Grid>

        <Box sx={imgFrame}>
          <Avatar
            src={resto.thumbnail}
            sx={{ width: "100%", height: "100%" }}
            variant="rounded"
          />
        </Box>

        {/* 주소 정보 */}
        <Grid
          container
          sx={{
            mt: "12px",
            ...undLine,
          }}
        >
          <Grid item xs={2}>
            <PinDropIcon sx={{ fontSize: "6vw", marginRight: "16px" }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ ...fontOver, fontSize: "6vw", textAlign: "left" }}
          >
            {resto.address}
          </Grid>
        </Grid>

        {/* 메뉴 정보 */}
        <Grid
          container
          sx={{
            mt: "12px",
            ...undLine,
          }}
        >
          <Grid item xs={2}>
            <LocalDiningIcon sx={{ fontSize: "6vw", marginRight: "16px" }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ ...fontOver, fontSize: "6vw", textAlign: "left" }}
          >
            {resto.menu1}, {resto.menu2}
          </Grid>
        </Grid>
      </Box>
    </PaperBackground>
  )
}
