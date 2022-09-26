/* global kakao*/
import { Box } from "@mui/material"
import React, { useState, useEffect } from "react"
const kakao = (window as any).kakao

export default function Map1() {
  const [coord, setCoord] = useState([33.450701, 126.570667])

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition(function (location) {
      setCoord([location.coords.latitude, location.coords.longitude])
    })
  }

  useEffect(() => {
    // getPosition()
    let container = document.getElementById("map") //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(coord[0], coord[1]), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    }

    let map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
  }, [coord, getPosition])

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
        좌표 검색 | <button onClick={() => getPosition()}>확인</button>
      </Box>

      <div
        id="map"
        style={{ width: "90vw", height: "60vw", margin: "auto" }}
      ></div>
    </Box>
  )
}
