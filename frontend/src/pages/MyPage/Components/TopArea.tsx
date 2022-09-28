import React, { useState } from "react"
import { userProfile } from "../../CommonComp/index"
import { Box, Grid } from "@mui/material"
import PaperBackGround from "../../CommonComp/PaperBackground"

export default function TopArea() {
  const [azti, setAzti] = useState("감성 촉촉 아재")

  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <PaperBackGround>
          <Grid
            container
            display="flex"
            spacing={3}
            sx={{ px: "25px", paddingTop: "25px" }}
          >
            <Grid item xs={4}>
              {userProfile()}
            </Grid>
            <Grid
              item
              xs={8}
              container
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <span className="title-text-md">{azti}</span>
            </Grid>
          </Grid>
        </PaperBackGround>
      </Box>
    </>
  )
}
