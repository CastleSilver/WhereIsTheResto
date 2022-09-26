// Image
import azti_img from "../UserComponents/assets/azti_img.png"

// MUI
import Grid from "@mui/material/Grid"

// Components
import AztiQuestion from "./AztiQuestion"

import react, { useEffect, useCallback } from "react"
import { useSelector } from "react-redux"

function Azti() {
  useEffect(() => {
    // useSelector((state : RootState) => state.userazti)
  }, [])

  return (
    <div id="rootAZTI">
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <img src={azti_img} alt="logo" width="100%" />
        <div>{AztiQuestion()}</div>
      </Grid>
    </div>
  )
}
export default Azti
