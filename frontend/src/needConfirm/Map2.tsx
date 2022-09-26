/* global kakao*/
import { Box } from "@mui/material"
import React, { useState, useEffect } from "react"
const kakao = (window as any).kakao

export default function Map2() {
  const [coord, setCoord] = useState([33.450701, 126.570667])
  const geocoder = new kakao.maps.services.Geocoder()

  useEffect(() => {
    const mapContainer = document.getElementById("map2")
    const mapOption = {
      center: new kakao.maps.LatLng(coord[0], coord[1]),
      level: 2,
    }

    const map = new kakao.maps.Map(mapContainer, mapOption)
  }, [coord])

  const getCoord = () => {
    geocoder.addressSearch(
      "제주특별자치도 제주시 첨단로 242",
      function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          let coords = new kakao.maps.LatLng(result[0].y, result[0].x)
          setCoord(coords)
        } else {
          console.log("FAIL", result, status)
        }
      }
    )
  }

  const titleArera = {
    fontFamily: "Chosun",
    fontSize: "40px",
    color: "rgb(2 49 119)",
    textAlign: "left",
    paddingLeft: "15px",
    fontWeight: "bold",
    marginBottom: "16px",
  }

  return (
    <Box sx={{ marginBottom: "42px" }}>
      <Box sx={titleArera}>
        주소 검색 |{" "}
        <button
          onClick={() => {
            getCoord()
          }}
        >
          버튼!
        </button>
      </Box>

      <div
        id="map2"
        style={{ width: "90vw", height: "60vw", margin: "auto" }}
      ></div>
    </Box>
  )
}
