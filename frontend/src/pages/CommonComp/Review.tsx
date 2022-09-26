import React, { useState } from "react"
import PaperBackground from "./PaperBackground"
import { Box, Grid } from "@mui/material"

interface revType {
  review: {
    id: number
    restoName: string
    address: string
    content: string
    rating: number
    imageUrl: string
  }
}

export default function Review({ review }: revType) {
  const [toggle, setToggle] = useState(1)

  return (
    <div>
      <PaperBackground>
        <Box sx={{}}>이름</Box>
        <Box>
          <button>수정</button>
          <button>삭제</button>
        </Box>
        <Box>
          <p>IMAGE</p>
        </Box>
        {toggle === 1 && (
          <Box>
            <button
              onClick={() => {
                setToggle(0)
              }}
            >
              더 보기asdf
            </button>
          </Box>
        )}
        {toggle === 0 && (
          <Box>
            <button
              onClick={() => {
                setToggle(1)
              }}
            >
              접기asdf
            </button>
          </Box>
        )}
      </PaperBackground>
    </div>
  )
}
