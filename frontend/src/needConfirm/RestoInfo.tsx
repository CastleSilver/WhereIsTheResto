import { Box, Avatar, Grid } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import PaperBackground from "../pages/CommonComp/PaperBackground"
import { useNavigate, useParams } from "react-router-dom"
import React from "react"

export default function RestoInfo({ resto }: any) {
  const fontOver = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }

  const titleArea = {
    fontSize: "8vw",
    fontFamily: "BMEULJIRO",
    borderBottom: "solid 2px rgba(0, 0, 0, 1)",
  }

  const addArea = {
    textAlign: "left",
    mt: "4px",
    fontSize: "5vw",
  }

  const contArea = {
    textAlign: "left",
    mt: "12px",
    fontSize: "5vw",
  }
  return (
    <Box
      sx={{ mt: "18px" }}
      onClick={() => alert(`레스토랑 정보: ${resto.id}`)}
    >
      <PaperBackground>
        <Box>
          <Avatar
            src={`${resto.thumbnail}`}
            variant="rounded"
            sx={{ width: "100%", height: "60vw" }}
          />

          <Grid
            container
            direction={"column"}
            alignContent={"start"}
            sx={{ p: "16px" }}
          >
            <Grid item container sx={titleArea}>
              <Grid
                item
                xs={9}
                sx={{ ...fontOver, textAlign: "left", fontSize: "9vw" }}
              >
                {resto.resto_name}
              </Grid>
              <Grid item xs={3}>
                <span style={{ fontSize: "6vw", color: "rgb(222, 224, 59)" }}>
                  ★ 4.2
                </span>
              </Grid>
            </Grid>
            <Grid item sx={{ width: "100%", ...addArea, ...fontOver }}>
              {resto.address}
            </Grid>
            <Grid item sx={contArea}>
              여기에 뭐 넣을까
            </Grid>
          </Grid>
        </Box>
      </PaperBackground>
    </Box>
  )
}
