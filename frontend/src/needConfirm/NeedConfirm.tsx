import axios from "axios"
import React, { useState } from "react"

export default function NeedConfirm() {
  const [content, setContent] = useState("")
  const [rating, setRating] = useState(0)
  const [files, setFiles] = useState({})

  const printIt = async () => {
    console.log(content, rating)
    console.log(typeof files, files)
    const bw = {
      restoId: 11,
      content,
      rating,
    }
    const aw = new Blob([JSON.stringify(bw)], { type: "application/json" })

    const formD = new FormData()

    formD.append("reviewReq", aw)
    for (let file in files) {
      formD.append("multipartFiles", file)
    }

    const req = {
      url: "http://localhost:8080/api/review",
      data: formD,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization:
          "Bearer eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2NDU1NDY1ODY3MiwiYWxnIjoiSFMyNTYifQ.eyJleHAiOjE2NjQ1NTgyNTgsInN1YiI6ImFjY2Vzcy10b2tlbiIsInVzZXJJZCI6IjI0NjM2MjI1NzEifQ.ECx5FsHxRz1Lvq6VSJMgvnn6AGwLYO-RDKRrSOCNQy0",
      },
    }
    console.log(req)
    let res
    try {
      res = await axios(req)
    } catch (error: any) {
      res = error.response.data.message
    }
    console.log(res)
  }
  return (
    <>
      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        id="content"
        type="text"
      />
      <input
        onChange={(e) => setRating(Number(e.target.value))}
        value={rating}
        id="rating"
        type="number"
      />
      <input
        onChange={(e) => setFiles({ ...e.target.files })}
        id="imgs"
        multiple
        type="file"
        accept="image/*"
      />
      <button onClick={printIt}>CLICK</button>
    </>
  )
}
