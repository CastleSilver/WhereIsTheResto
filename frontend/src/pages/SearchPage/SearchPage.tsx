import React from "react"
import { TextField } from "@mui/material"
export default function SearchPage() {
  return (
    <>
      <TextField
        fullWidth
        label="어떤 음식을 드시고 싶으신가요?"
        color="warning"
        id="fullWidth"
      />
    </>
  )
}
