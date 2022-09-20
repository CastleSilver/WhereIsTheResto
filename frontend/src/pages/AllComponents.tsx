// React, Redux, React-Router
import React from "react"
import { Link } from "react-router-dom"

// Components
import UserCard from "../components/UserCard"
import AZTI from "../components/AZTI"
import Review from "../components/Review"
import Map from "../components/Map"
import RstInfo from "../components/RstInfo"
import BottomBar from "../components/BottomBar"

// MUI
import { Grid, Box } from "@mui/material"

export default function AllComponents() {
  return (
    <Box>
      <h1>All Components</h1>
      <Link to="/main">Go to MainPage</Link>
      <hr />
      {/* Restaurant 정보 */}
      <div>
        <RstInfo />
      </div>
      <hr />

      {/* User 정보 페이지 */}
      <div>
        <h3>User w/ AZTI (User Page)</h3>
        <Grid container display="flex">
          <Grid item xs={4} spacing={2}>
            <UserCard />
          </Grid>
          <Grid item xs={8}>
            <AZTI />
          </Grid>
        </Grid>
      </div>
      <hr />

      {/* User Review 정보 */}
      <div>
        <h3>User w/ Review (가게 Detail Page)</h3>
        <Grid container display="flex">
          <Grid item xs={4} spacing={2}>
            <UserCard />
          </Grid>
          <Grid item xs={8}>
            <Review />
          </Grid>
        </Grid>
      </div>
      <hr />

      {/* 지도 정보 */}
      <div>
        <Map />
      </div>
      <hr />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          left: 0,
          zIndex: 1,
        }}
      >
        <BottomBar />
      </Box>
    </Box>
  )
}
