import { Grid, Rating, Box } from "@mui/material"
import { FormControl } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PaperBackground from "../pages/CommonComp/PaperBackground"
import Swal from "sweetalert2"

import { review } from "../api/index"

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
  const [files, setFiles] = useState<Object>({})
  const [urls, setUrls] = useState<any>([])

  const onSubmit = async () => {
    const formD = new FormData()
    const baseInfo = JSON.stringify({ restoId, rating, content })
    console.log("baseInfo", baseInfo)
    const reviewReq = new Blob([baseInfo], { type: "application/json" })

    formD.append("reviewReq", reviewReq)
    for (let file in files) {
      formD.append("multipartFiles", file)
    }
    console.log("-----------------------Review 보내기 전")
    formD.forEach(async (f: any) => {
      const a = await f.text()
      console.log(a)
    })

    const res = await review.create(formD)
    console.log(res)
    // if (res === "잘못된 JWT 서명입니다") {
    //   Swal.fire("JWT가 만료됐습니다.", "", "success")
    //   navigate("/")
    // } else {
    //   navigate(`/restos/${restoId}`)
    // }
  }

  const backBtnStyle = {
    position: "fixed",
    top: "7vw",
    left: "7vw",
    fontSize: "9vw",
  }

  return (
    <>
      <Box sx={backBtnStyle} onClick={() => navigate(-1)}>
        뒤로가기
      </Box>
      <Grid container direction="column" justifyContent="center" sx={boxStyle}>
        <PaperBackground>
          <Grid container direction="column">
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

              <label htmlFor="img-input">
                <Box sx={{ fontSize: "6vw" }}>사진 업로드</Box>
              </label>
              <input
                type="file"
                accept="image/*"
                multiple
                id="img-input"
                style={{ display: "none" }}
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
