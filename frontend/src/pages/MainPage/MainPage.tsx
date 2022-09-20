// Base Import
import React from "react"
import { Link } from "react-router-dom"

// Image
import { Logo } from "../../assets/imageUrl"

// MUI
import { Grid, Box, TextField } from "@mui/material"
import BottomBar from "../../components/BottomBar"

// Components
import Card from "./Card"

export default function MainPage() {
  return (
    <>
      <TextField
        fullWidth
        label="어떤 음식을 드시고 싶으신가요?"
        color="warning"
        id="fullWidth"
      />
      <Link to="/">Go to Start</Link>
      <Card></Card>
      <BottomBar />
    </>
  )
}
