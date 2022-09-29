import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import React from "react"
import { ThreeDots } from "react-loader-spinner"
const LoadingPaperStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
  background-color: rgba(217, 217, 217, 0.9);
`

export default function LoadingPaper() {
  return (
    <>
      <LoadingPaperStyle>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          sx={{ height: "100%", position: "fixed" }}
        >
          <ThreeDots
            height="40%"
            width="100%"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </Grid>
      </LoadingPaperStyle>
    </>
  )
}
