import React from "react"
import { Box, Grid } from "@mui/material"

interface propsType {
  children: React.ReactNode
}

const paperStyle1 = {
  backgroundColor: "rgb(255 249 243)",
  borderRadius: "10px",
  overflow: "hidden",
}

export default function PaperBackground({ children }: propsType) {
  return <Box sx={paperStyle1}>{children}</Box>
}
