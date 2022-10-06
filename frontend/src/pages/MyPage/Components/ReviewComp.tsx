// React 시스템 Import
import React, { useEffect, useState } from "react"
import { review as reviewAPI } from "../../../api/index"

// 기타 라이브러리 Import
import { Avatar, Box, Button, Grid, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Swal from "sweetalert2"

// Components Import
import PaperBackground from "../../CommonComp/PaperBackground"

// Styling Code
const titleText = {
  fontFamily: "BMEULJIRO",
  fontSize: "8vw",
  marginTop: "auto",
  marginBottom: "auto",
  textAlign: "left",
  // color: "rgb(216 99 69)",
  color: "rgb(2 49 119)",
}

const backArea = {
  py: "20px",
  px: "5vw",
  paddingBottom: 0,
}

const imgFrame = {
  width: "100%",
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
  paddingBottom: "20px",
}

const btnStyle = {
  fontSize: "6vw",
  color: "rgb(0 0 0)",
  width: "100%",
  py: "10px",
}

const fontOver = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}
export default function ReviewComp({ review, onDelete }: any) {
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
      html: "<img src='https://t1.daumcdn.net/cfile/tistory/9940DB4C5EEB9D0018'/>",
      showDenyButton: true,
      confirmButtonText: "삭제",
      denyButtonText: "취소",
      denyButtonColor: "rgba(217, 217, 217, 1)",
      confirmButtonColor: "orange",
      background: "#fff url(/images/trees.png)",
      backdrop: `
      rgba(0, 0, 0 ,0.8)
      no-repeat
    `,
    }).then((result) => {
      if (result.isConfirmed) {
        reviewAPI.delete(review.id)
        Swal.fire("삭제 완료!", "", "success")
        onDelete(review.id)
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
            <Grid container>
              <Grid item xs={9} sx={{ ...titleText, ...fontOver }}>
                {review.restoName}
              </Grid>
              <Grid item xs={3}>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MenuIcon fontSize="large" sx={{ color: "rgb(0 0 0)" }} />
                </Button>
              </Grid>
            </Grid>
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
                  sx={{
                    width: "100%",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "CHOSUN",
                  }}
                  onClick={() => deleteReview()}
                >
                  리뷰 삭제
                </Box>
              </MenuItem>
            </Menu>
          </Grid>
          {Object.keys(review.imageUrl).length !== 0 && (
            <Grid item sx={imgFrame}>
              <Avatar
                src={review.imageUrl[0]}
                sx={{ width: "100%", height: "100%" }}
                variant="rounded"
              />
            </Grid>
          )}
          <Grid item>
            <Button onClick={() => setToggle((prev) => !prev)} sx={btnStyle}>
              {toggleMsg}
            </Button>
          </Grid>
          {toggle !== true && (
            <Grid item sx={contentArea} className="kill-scroll">
              <Box sx={{ alignText: "center" }}>{review.content}</Box>
            </Grid>
          )}
        </Grid>
      </PaperBackground>
    </>
  )
}
