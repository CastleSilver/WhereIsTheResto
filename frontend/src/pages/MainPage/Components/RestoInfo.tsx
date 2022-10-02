import { AccessTimeRounded } from "@mui/icons-material"
import { Box, Grid } from "@mui/material"
import React from "react"
import PaperBackground from "../../CommonComp/PaperBackground"
import LocalDiningIcon from "@mui/icons-material/LocalDining"

export default function RestoInfo() {
  const wholeFrame = {
    padding: "15px",
  }

  const tempImg =
    "https://mp-seoul-image-production-s3.mangoplate.com/407982/90579_1597542394286_32282?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80"

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

  const titleStyle = {
    fontFamily: "BMEULJIRO",
    fontSize: "8vw",
    textAlign: "center",
    marginBottom: "6px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "rgb(216 99 69)",
    py: "12px",
  }

  const undLine = {
    borderBottom: "solid 2px rgba(0, 0, 0, 0.9)",
  }
  return (
    <PaperBackground>
      <Box sx={wholeFrame}>
        <Box sx={titleStyle}>정돈</Box>
        <Box sx={imgFrame}>
          <img src={tempImg} style={imgStyle} />
        </Box>
        <Grid
          container
          sx={{
            mt: "12px",
            fontSize: "30px",
            ...undLine,
          }}
        >
          <LocalDiningIcon sx={{ fontSize: "30px", marginRight: "16px" }} />
          안심 돈까스
        </Grid>
      </Box>
    </PaperBackground>
  )
}
