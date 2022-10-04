import { Rating } from "@mui/material"
import StarIcon from "@mui/icons-material/Star"

import { useState } from "react"

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

interface propType {
  rating: number
  setRating: any
}

export default function RatingForm({ rating, setRating }: propType) {
  const [hover, setHover] = useState(-1)
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`
  }

  return (
    <>
      <Rating
        name="hover-feedback"
        value={rating}
        precision={0.5}
        getLabelText={getLabelText}
        onChangeActive={(event, newHover) => {
          setHover(newHover)
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{ fontSize: "50px", marginBottom: "30px" }}
        onChange={(event, newRating) => {
          setRating(Number(newRating))
        }}
      />
    </>
  )
}
