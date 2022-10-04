// React 시스템 Import
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"

// 기타 라이브러리 Import
import { Box, Button, FormControl } from "@mui/material"
import Swal from "sweetalert2"

// Components Import
import PaperBackground from "../pages/CommonComp/PaperBackground"
import ContentForm from "./ReviewComp/ContentForm"
import RatingForm from "./ReviewComp/RatingForm"
import PrevImgs from "./ReviewComp/PrevImgs"
import { review } from "../api/index"

// Styling Code
const backBtnStyle = {
  color: "black",
  textAlign: "left",
  fontSize: "10vw",
}

export default function NewReviewForm() {
  const navigate = useNavigate()
  const params = useParams()
  const restoId = params.restoId

  const [rating, setRating] = useState<number>(0)
  const [content, setContent] = useState<string>("")
  const [files, setFiles] = useState<string[]>([])
  const [urls, setUrls] = useState<string[]>([])

  // Image URL 제공
  const getImgs = (e: any) => {
    const getFiles = e.target.files
    const fileCnt = getFiles.length
    const newFiles = []
    const newUrls = []

    for (let ind = 0; ind < fileCnt; ind++) {
      const file = getFiles[ind]
      newFiles.push(file)
      newUrls.push(URL.createObjectURL(file))
    }

    setFiles(newFiles)
    setUrls(newUrls)
  }

  // API 요청
  const createReview = async () => {
    const cond1 = restoId === ""
    const cond2 = content === ""
    if (cond1 || cond2) {
      const msg = []

      if (cond2) {
        msg.push("식당 ID가 없습니다")
      }
      if (cond2) {
        msg.push("리뷰 내용이 없습니다.")
      }
      const c = msg.join("<br/><br/>")

      Swal.fire({
        title: "리뷰 작성 실패",
        html: `${c}`,
      })
      return
    }

    // Blob 처리 전
    const befData = JSON.stringify({
      restoId,
      rating,
      content,
    })

    // Form Data에 담기
    const formD = new FormData()
    const reviewReq = new Blob([befData], { type: "application/json" })
    formD.append("reviewReq", reviewReq)
    for (let file in files) {
      formD.append("multipartFiles", file)
    }

    const res = await review.create(formD)
    if (res.status === 200) {
      Swal.fire("리뷰 작성 성공!", "", "success")
      navigate(-1)
      return
    } else {
      Swal.fire("리뷰 작성에 실패 했습니다", "")
      return
    }
  }

  return (
    <>
      <Box sx={backBtnStyle} onClick={() => navigate(-1)}>
        <Button sx={backBtnStyle}>뒤로 가기</Button>
      </Box>
      <FormControl>
        <PaperBackground>
          <Box sx={{ width: "80vw", px: "5vw", py: "16px" }}>
            {/* 별점 부여 영역 */}
            <RatingForm rating={rating} setRating={setRating} />
            {/* 리뷰 내용 영역 */}
            <ContentForm content={content} setContent={setContent} />
            {/* 사진 미리보기 영역 */}
            {urls.length !== 0 && <PrevImgs urls={urls} />}

            {/* 사진 업로드 영역 */}
            <label htmlFor="img-input">
              <Box
                sx={{
                  fontSize: "7vw",
                  py: "12px",
                  border: "1px solid orange",
                  color: "rgb(228, 73, 31)",
                  mb: "12px",
                }}
              >
                사진 업로드
              </Box>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              id="img-input"
              style={{ display: "none" }}
              onChange={(e) => getImgs(e)}
            />

            <Button
              variant="outlined"
              color="warning"
              fullWidth
              sx={{ fontSize: "7vw", m: 0, p: 0 }}
              onClick={() => createReview()}
            >
              제출
            </Button>
          </Box>
        </PaperBackground>
      </FormControl>
    </>
  )
}
