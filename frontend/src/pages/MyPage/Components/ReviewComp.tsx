import { Box, Button, Grid, Menu, MenuItem } from "@mui/material"
import React, { useEffect, useState } from "react"
import PaperBackground from "../../CommonComp/PaperBackground"
import MenuIcon from "@mui/icons-material/Menu"
import { fontSize } from "@mui/system"
import Swal from "sweetalert2"
import { review as reviewAPI } from "../../../api/index"

const titleText = {
  fontFamily: "BMEULJIRO",
  fontSize: "8vw",
  color: "rgb(228, 73, 39)",
  marginTop: "auto",
  marginBottom: "auto",
}

const backArea = {
  padding: "20px",
  paddingBottom: 0,
}

const imgFrame = {
  width: "100%",
  height: "65vw",
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
  border: "solid 2px orange",
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
  width: "100%",
  maxHeight: "35vw",
  overflow: "scroll",
  fontSize: "5.5vw",
  display: "flex",
  paddingBottom: "20px",
}

const btnStyle = {
  fontSize: "5vw",
  fontWeight: "bold",
  color: "rgb(217 93 65)",
  width: "100%",
  py: "10px",
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

  const deleteReview = async () => {
    await Swal.fire({
      title: "정말 삭제하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "삭제",
      denyButtonText: "취소",
      confirmButtonColor: "orange",
      denyButtonColor: "red",
    }).then((result) => {
      if (result.isConfirmed) {
        reviewAPI.delete(review.id)
        Swal.fire("삭제 완료!", "", "success")
      }
    })
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
              <MenuItem onClick={handleClose}>
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  onClick={() => deleteReview()}
                >
                  리뷰 삭제
                </Box>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Box
                  sx={{ width: "100%", height: "100%" }}
                  onClick={() => console.log("리뷰 수정", review.id)}
                >
                  리뷰 수정
                </Box>
              </MenuItem>
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
              </Grid>
            </Grid>
          )}
        </Grid>
      </PaperBackground>
    </>
  )
}
