import React, { useEffect, useState } from "react"
import { Grid, Box } from "@mui/material"
import { Link } from "react-router-dom"

const btnList = ["홈", "써-치", "내 정보"]
const Links = ["/main", "/search", "/my-page"]

// 기본 스타일
const style = {
  position: "fixed",
  width: "100%",
  bottom: 0,
  left: 0,
  backgroundColor: "rgb(255 249 243)",
  height: "40px",
  zIndex: 100,
}

const btnStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "24px",
  width: "100%",
  height: "100%",
}

const selected = {
  height: "5px",
  backgroundColor: "orange",
}

export default function Bottombar() {
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    if (pageNum !== Number(sessionStorage.getItem("pageNum"))) {
      const temp = sessionStorage.getItem("pageNum")
      setPageNum(Number(temp))
    }
  }, [pageNum, setPageNum])

  return (
    <Grid container display="flex" sx={style}>
      {btnList.map((btn, index) => {
        return (
          <Grid
            item
            xs={4}
            key={index}
            sx={{ height: "100%" }}
            onClick={() => setPageNum(index)}
          >
            <Link to={`${Links[index]}`} style={btnStyle}>
              <Box sx={index === pageNum ? selected : { height: "5px" }}></Box>
              <p
                style={{
                  padding: "5px",
                  margin: 0,
                  color: "rgb(217 93 65)",
                }}
              >
                {btn}
              </p>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}
