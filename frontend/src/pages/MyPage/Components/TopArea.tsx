import React, { useState } from "react"
import { userProfile } from "../../CommonComp/index"
import { Box, Grid } from "@mui/material"
import PaperBackGround from "../../CommonComp/PaperBackground"

export default function TopArea({ userInfo }: any) {
  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <PaperBackGround>
          <Grid
            container
            display="flex"
            spacing={3}
            sx={{ px: "25px", paddingTop: "25px" }}
            justifyContent="space-between"
          >
            <Grid
              item
              xs={12}
              container
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <span className="title-text-md">{userInfo.aztiType}</span>
            </Grid>
            <Grid item xs={12}>
              {userProfile({
                profileImageURL: userInfo.profileImageURL,
                nickname: userInfo.nickname,
              })}
            </Grid>
          </Grid>
        </PaperBackGround>
      </Box>
    </>
  )
}
