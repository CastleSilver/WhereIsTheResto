import React, { useEffect } from "react"
import Banner from "./Components/Banner"
import BestResto from "./Components/BestResto"
import OtherRestos from "./Components/OtherRestos"

import { Box } from "@mui/material"

export default function MainPage() {
  return (
    <Box>
      <Banner />
      <BestResto />
      <OtherRestos />
    </Box>
  )
}
