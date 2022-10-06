import styled from "@emotion/styled"
import { Box, Button, Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"

const LoadingPaperStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 110;
  background-color: rgba(217, 217, 217, 0.9);
`

export default function LoadingPaper() {
  const [guide, setGuide] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setGuide(true)
    }, 5000)
  }, [setTimeout])

  return (
    <>
      <LoadingPaperStyle>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          sx={{ height: "100%", position: "fixed" }}
        >
          <ThreeDots
            height="40%"
            width="100%"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            visible={true}
          />
          {guide === true && (
            <>
              <Grid>
                <Grid>
                  <p>해당 페이지 접속이 지연되고 있습니다.</p>
                  <p>이전 페이지로 돌아가고 싶다면 버튼을 눌러주세요</p>
                </Grid>
                <Box
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    sessionStorage.setItem("pageNum", "0")
                    navigate(-1)
                  }}
                >
                  <Button variant="outlined" color="warning">
                    이전 페이지로
                  </Button>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </LoadingPaperStyle>
    </>
  )
}
