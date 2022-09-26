import React from "react"
import UserProfile from "../../CommonComp/UserProfile"
import { Box, Button, Grid } from "@mui/material"
import PaperBackground from "../../CommonComp/PaperBackground"

const contentArea = {
  paddingLeft: "12px",
  paddingTop: "24px",
}

export default function Review() {
  return (
    <>
      <PaperBackground>
        <Grid container sx={{ p: "12px" }}>
          <Grid item xs={4}>
            <UserProfile />
          </Grid>

          <Grid item xs={8} sx={contentArea} container direction="column">
            <Grid item xs={8}>
              <span>Review 내용Review 내용Review 내용Review 내용</span>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ display: "flex" }}
              container
              justifyContent={"space-around"}
            >
              <Grid item xs={5}>
                <Button variant="outlined" style={{ width: "100%" }}>
                  삭제
                </Button>
              </Grid>
              <Grid item xs={5}>
                <Button variant="outlined" style={{ width: "100%" }}>
                  수정
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </PaperBackground>
    </>
  )
}
