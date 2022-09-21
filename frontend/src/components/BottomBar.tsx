import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// MUI Import
import { Box, Grid } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import PersonIcon from "@mui/icons-material/Person"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import { orange } from "@mui/material/colors"

export default function BottomBar() {
  const [clicked, setClicked] = useState(0)

  const bottomStyle = {
    background: "rgb(217, 217, 217)",
    padding: "8px",
  }

  const getIconStyle = (num: Number) => {
    const iconStyle = { fontSize: 50, color: "rgba(255, 255, 255, 0.5)" }
    if (num === clicked) {
      iconStyle.color = "rgb(255, 187, 71, 1.0)"
    }
    return iconStyle
  }

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
          zIndex: 1,
        }}
      >
        <Grid container display="flex" sx={bottomStyle}>
          <Grid xs={4}>
            <Link to="/main" onClick={() => setClicked(0)}>
              <HomeIcon sx={getIconStyle(0)} />
            </Link>
          </Grid>
          <Grid xs={4}>
            <Link to="/search" onClick={() => setClicked(1)}>
              <SearchIcon sx={getIconStyle(1)} />
            </Link>
          </Grid>
          <Grid xs={4}>
            <Link to="/my-page" onClick={() => setClicked(2)}>
              <PersonIcon sx={getIconStyle(2)} />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
