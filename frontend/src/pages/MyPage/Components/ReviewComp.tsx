import { Box, Button, Grid, Menu, MenuItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import PaperBackground from "../../CommonComp/PaperBackground"
import MenuIcon from "@mui/icons-material/Menu"
import { fontSize } from "@mui/system"

const titleText = {
  fontFamily: "BMEULJIRO",
  fontSize: "8vw",
  color: "rgb(228, 73, 39)",
  marginTop: "auto",
  marginBottom: "auto",
}

const backArea = {
  padding: "20px",
}

const imgFrame = {
  width: "80vw",
  height: "65vw",
  position: "relative",
  overflow: "hidden",
}

const imgArea: {} = {
  width: "100%",
  height: "100%",
  position: "relative",
  objectFit: "cover",
  left: 0,
  top: 0,
}

const contentArea = {
  width: "80vw",
  maxHeight: "25vw",
  overflow: "scroll",
  marginBottom: "20px",
}

const btnStyle = {
  fontSize: "4vw",
  width: "100%",
  color: "black",
}

export default function ReviewComp({ review }: any) {
  const [toggle, setToggle] = useState(true)
  const [toggleMsg, setToggleMsg] = useState("리뷰 사진 보기")

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    if (toggle) {
      setToggleMsg("▶  리뷰 내용 보기")
    } else {
      setToggleMsg("▽  리뷰 내용 접기")
    }
  }, [toggle, setToggleMsg])

  return (
    <>
      <PaperBackground>
        <Grid container direction="column" sx={backArea}>
          <Grid
            item
            container
            justifyContent={"space-between"}
            sx={{ marginBottom: "18px" }}
          >
            <Box sx={titleText}>{review.restoName}</Box>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" color="warning" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>리뷰 삭제</MenuItem>
              <MenuItem onClick={handleClose}>리뷰 수정</MenuItem>
            </Menu>
          </Grid>
          <Grid item sx={imgFrame}>
            <img src={review.imageUrl} style={imgArea} />
          </Grid>
          <Grid item>
            <Button onClick={() => setToggle((prev) => !prev)} sx={btnStyle}>
              {toggleMsg}
            </Button>
          </Grid>
          {toggle !== true && (
            <Grid item sx={contentArea} className="kill-scroll">
              <Grid direction="column" justifyContent="center">
                <Box>{review.content}</Box>
                <Box>{review.content}</Box>
                <Box>{review.content}</Box>
                <Box>{review.content}</Box>
                <Box>{review.content}</Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </PaperBackground>
    </>
  )
}
