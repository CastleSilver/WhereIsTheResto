import React, { useEffect } from "react"
import Banner from "./Components/Banner"
import BestResto from "./Components/BestResto"
import OtherRestos from "./Components/OtherRestos"

import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"

export default function MainPage() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box>
      <Banner />
      <BestResto />
      <OtherRestos />
      <h1>유튜브 [다른 영상]</h1>
      <iframe
        width="90%"
        height="315"
        src="https://www.youtube.com/embed/e6GddcnNmxY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Box>
  )
}
