import React from "react"

interface propsType {
  content: string
  setContent: any
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

export default function ContentForm({ content, setContent }: propsType) {
  return (
    <textarea
      id="my-input"
      aria-describedby="my-helper-text"
      value={content}
      style={textStyle}
      onChange={(e) => {
        setContent(e.target.value)
      }}
    ></textarea>
  )
}
