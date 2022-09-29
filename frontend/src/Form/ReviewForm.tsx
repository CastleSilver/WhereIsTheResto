import { Box, Button, Grid, Rating } from "@mui/material"
import {
  FormLabel,
  FormHelperText,
  Input,
  InputLabel,
  FormControl,
} from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import PaperBackground from "../pages/CommonComp/PaperBackground"
import { HowToVoteRounded } from "@mui/icons-material"

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
  const [hover, setHover] = useState(-1)
  const [value, setValue] = useState<number | null>(2)
  const [submitData, setSubmitData] = useState(initialValue)

  const onSubmit = () => {
    const temp = { ...submitData }
    temp.rating = value !== null ? value : 0
    console.log(temp)
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
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(e, newValue) => {
                  setValue(newValue)
                  const temp = { ...submitData }
                  temp.rating = newValue
                  console.log(temp)
                  setSubmitData(temp)
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover)
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ fontSize: "50px", marginBottom: "30px" }}
              />
            </Grid>
            <Grid item>
              <textarea
                id="my-input"
                aria-describedby="my-helper-text"
                value={submitData.content}
                style={{
                  boxSizing: "border-box",
                  width: "100%",
                  height: "24vh",
                  margin: 0,
                  padding: "15px",
                  resize: "none",
                  marginBottom: "30px",
                  fontFamily: "Chosun",
                  fontSize: "24px",
                }}
                onChange={(e) => {
                  const temp = { ...submitData }
                  temp.content = e.target.value
                  setSubmitData(temp)
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
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                if (e.target.files !== null) {
                  const temp = { ...submitData }
                  const formData = new FormData()
                  for (let image of e.target.files) {
                    formData.append("imageFile", image)
                  }
                  console.log(formData)
                  setSubmitData(temp)
                }
              }}
            />
          </FormControl>
        </Grid>
      </PaperBackground>
    </Grid>
  )
}
