import { Button, Grid, Rating } from "@mui/material"
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
  padding: "5%",
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
  fontSize: "24px",
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
  const [files, setFiles] = useState<Object>({})

  const onSubmit = async () => {
    const formData = new FormData()
    const baseInfo = JSON.stringify({ restoId, rating, content })
    const reviewReq = new Blob([baseInfo], { type: "application/json" })

    formData.append("reviewReq", reviewReq)
    for (let file in files) {
      formData.append("multipartFiles", file)
    }
    const res = await review.create(formData)
    console.log(res)
    if (res === "잘못된 JWT 서명입니다") {
      Swal.fire("JWT가 만료됐습니다.", "", "success")
      navigate("/")
    } else {
      navigate(`/restos/${restoId}`)
    }
  }

  return (
    <Grid container direction="column" justifyContent="center" sx={boxStyle}>
      <span onClick={() => navigate(-1)}>뒤로가기</span>
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
            <Grid item>
              <Button
                variant="outlined"
                fullWidth
                color="warning"
                onClick={() => onSubmit()}
              >
                작성 완료
              </Button>
            </Grid>
            <input type="file" accept="image/*" multiple onChange={() => {}} />
          </FormControl>
        </Grid>
      </PaperBackground>
    </Grid>
  )
}
