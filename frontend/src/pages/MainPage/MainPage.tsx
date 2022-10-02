import React, { useEffect, useState } from "react"
import Banner from "./Components/Banner"
import BestResto from "./Components/BestResto"

import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"

export default function MainPage() {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)
  }, [show])

  return (
    <Box>
      <Banner />
      <Box sx={{ height: "200px" }}></Box>
      <BestResto />
    </Box>
  )
}
