import { Box, Avatar, Grid } from "@mui/material"
import React from "react"
import styled from "styled-components"

const Slider = styled.div`
  position: relative;
  overflow: hidden;
`

const RowContent = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-column: column;
  scroll-behavior: smooth;
`
const Content = styled.div`
  margin-right: 4vw;
  zindex: 60;
  width: "30vw";
  interface propsType {
    urls: string[];
  }
`

interface propsType {
  urls: string[]
}

const avatarStyle = {
  width: "40vw",
  height: "40vw",
  marginRight: "5vw",
}

export default function PrevImgs({ urls }: propsType) {
  console.log(urls)
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "solid 2px gray",
        borderBottom: "solid 2px gray",
        py: "8px",
      }}
    >
      <Slider>
        <RowContent className="kill-scroll">
          {urls.map((url: string, index: number) => {
            return (
              <Box key={index} sx={{ border: "soldid 1px rgb(217 217 217)" }}>
                <Avatar src={url} sx={avatarStyle} variant="rounded" />
              </Box>
            )
          })}
        </RowContent>
      </Slider>
    </Box>
  )
}
