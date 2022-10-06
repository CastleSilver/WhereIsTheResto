import { Grid, Rating, Box, Avatar, FormControl } from "@mui/material"

import StarIcon from "@mui/icons-material/Star"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PaperBackground from "../pages/CommonComp/PaperBackground"
import Swal from "sweetalert2"

import { review } from "../api/index"
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
`
const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
}

const boxStyle = {
  height: "85vh",
  mx: "auto",
  width: "100%",
  position: "static",
}

const textStyle: {} = {
  boxSizing: "border-box",
  width: "100%",
  height: "24vh",
  margin: 0,
  padding: "15px",
  resize: "none",
  marginBottom: "30px",
  fontFamily: "Chosun",
  fontSize: "7vw",
  border: "solid 2px orange",
}

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`
}

interface reviewType {
  content: string
  images: FormData[]
  rating: number | null
}
const initialValue: reviewType = {
  content: "",
  images: [],
  rating: 0,
}

export default function ReviewForm() {
  const navigate = useNavigate()
  const params = useParams()
  const [hover, setHover] = useState(-1)

  const restoId = params.restoId
  const [rating, setRating] = useState<number | null>(0)
  const [content, setContent] = useState<string>("")

  // 이미지 미리보기 시스템 제작-ing
  const [files, setFiles] = useState<any>({})
  const [urls, setUrls] = useState<any>([])

  const takeImgs = async (e: any) => {
    const newFiles = e.target.files
    const lenFiles = newFiles.length
    setFiles({ ...e.target.files })

    const temp = []
    for (let ind = 0; ind < lenFiles; ind++) {
      const a = URL.createObjectURL(newFiles[ind])
      temp.push(a)
    }
    setUrls(temp)
  }

  // 리뷰 제출 폼
  const onSubmit = async () => {
    const formD = new FormData()
    const baseInfo = JSON.stringify({ restoId, rating, content })

    const reviewReq = new Blob([baseInfo], { type: "application/json" })

    // form-data에 데이터 넣기
    formD.append("reviewReq", reviewReq)
    for (let file in files) {
      formD.append("multipartFiles", file)
    }

    formD.forEach(async (f: any) => {
      const a = await f.text()
    })

    const res = await review.create(formD)
  }

  const backBtnStyle = {
    fontSize: "9vw",
  }

  return (
    <>
      <Box sx={backBtnStyle} onClick={() => navigate(-1)}>
        뒤로가기
      </Box>
      <Grid container direction="column" justifyContent="center" sx={boxStyle}>
        <PaperBackground>
          <Grid container direction="column" sx={{ w: "100%" }}>
            <FormControl sx={{ p: "5%" }}>
              <Grid item>
                <Rating
                  name="hover-feedback"
                  value={rating}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover)
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                  sx={{ fontSize: "50px", marginBottom: "30px" }}
                  onChange={(event, newRating) => {
                    setRating(Number(newRating))
                  }}
                />
              </Grid>
              <Grid item>
                <textarea
                  id="my-input"
                  aria-describedby="my-helper-text"
                  value={content}
                  style={textStyle}
                  onChange={(e) => {
                    setContent(e.target.value)
                  }}
                />
              </Grid>
              {/* 사진 미리보기 */}
              <Grid
                item
                container
                sx={{
                  width: "90%",
                  overflow: "hidden",
                  overflowX: "scroll",
                  position: "relative",
                }}
              >
                <Grid item>asdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Grid>
                <Grid item>asdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Grid>
                <Grid item>asdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Grid>
              </Grid>
              <label htmlFor="img-input">
                <Box sx={{ fontSize: "6vw" }}>사진 업로드</Box>
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                id="img-input"
                style={{ display: "none" }}
                onChange={(e) => takeImgs(e)}
              />
              <Grid item sx={{ pt: "24px" }}>
                <Box
                  sx={{ fontSize: "6vw", fontFamily: "BMEULJIRO" }}
                  onClick={() => onSubmit()}
                >
                  작성 완료
                </Box>
              </Grid>
            </FormControl>
          </Grid>
        </PaperBackground>
      </Grid>
    </>
  )
}
