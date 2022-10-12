// React 시스템 Import
import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from "../userStore/hooks"
import {
  getInfoAsync,
  selectResto,
  selectRestoStatus,
} from "../userStore/restoSlice"

import { Store } from "@reduxjs/toolkit"

import CharTen from "../../assets/char10.png"
import CharTwe from "../../assets/char20.png"
import CharThr from "../../assets/char30.png"
const logos = [CharTen, CharTwe, CharThr]

import { useNavigate, useParams } from "react-router-dom"

// 기타 라이브러리 Import
import { Avatar, Box } from "@mui/material"

// Components Import
import LoadingPaper from "../CommonComp/LoadingPaper"
import RestoArea from "./Components/RestoArea"
import Reviews from "./Components/Reviews"
import Map from "../CommonComp/Map"
import axios from "axios"
import PaperBackground from "../CommonComp/PaperBackground"
import styled from "styled-components"

const Slider = styled.div`
  position: relative;
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
  width: 100%;
`

const fontOver = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}

export default function RestoDetail() {
  const { restoId } = useParams()
  const resto = useAppSelector(selectResto)
  const [simRestos, setSimRestos] = useState<any[]>([])
  const [simStatus, setSimStatus] = useState<boolean>(false)

  const status = useAppSelector(selectRestoStatus)
  const dispatch = useAppDispatch()
  const titleArera = {
    fontFamily: "BMEULJIRO",
    fontSize: "36px",
    color: "rgb(2 49 119)",
    textAlign: "left",
    paddingLeft: "15px",
    fontWeight: "bold",
    marginBottom: "16px",
  }
  window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(getInfoAsync(Number(restoId)))
  }, [restoId, dispatch])

  const getOtherResto = async () => {
    // const url = `http://localhost:8000/data/recommend/cf/${restoId}`
    const url = `http://j7a401.p.ssafy.io/data/recommend/cf/${restoId}`
    await axios
      .get(url)
      .then((res) => {
        setSimRestos(res.data.recommendCfList)
      })
      .catch((err) => {
        console.log(err)
      })
    setSimStatus(true)
  }

  useEffect(() => {
    getOtherResto()
  }, [restoId, setSimRestos])

  let age
  if (resto !== undefined) {
    age = 2022 - resto.restoAge
  } else {
    age = 0
  }
  const navigate = useNavigate()

  let gapInd
  let ageGap = Math.floor(new Date().getUTCFullYear() - age)
  if (ageGap <= 10) {
    gapInd = 0
  } else if (ageGap <= 20) {
    gapInd = 1
  } else {
    gapInd = 2
  }

  return (
    <>
      <img src={logos[gapInd]} width="25%" />
      {/* <LoadingPaper /> */}
      {resto?.id === -1 || (simRestos.length === 0 && <LoadingPaper />)}
      {resto?.id !== -1 && simRestos.length !== 0 && (
        <Box>
          {/* 식당 정보 이름, 사진, 메뉴, 위치, 경력, 좋아요 수 */}

          <RestoArea />
          <Box sx={{ marginBottom: "42px" }}></Box>
          {/* 지도 */}
          <Map />
          <Box sx={{ marginBottom: "42px" }}></Box>
          {/* 유사 가게 리스트 추천 */}
          <Box sx={titleArera}>| 유-사 식당</Box>
          {!simStatus && <div>로딩 중...</div>}
          {simStatus && (
            <>
              <Slider>
                <RowContent className="kill-scroll">
                  {simRestos.map((simResto: any, index: number) => {
                    return (
                      <Content key={index}>
                        <PaperBackground>
                          <Box
                            sx={{ width: "50vw" }}
                            onClick={() => navigate(`/restos/${simResto.id}`)}
                          >
                            <Box>
                              <Avatar
                                src={simResto.thumbnail}
                                sx={{ width: "100%", height: "40vw" }}
                                variant="rounded"
                              />
                            </Box>
                            <Box
                              sx={{ fontSize: "8vw", my: "8px", ...fontOver }}
                            >
                              {simResto.resto_name}
                            </Box>
                          </Box>
                        </PaperBackground>
                      </Content>
                    )
                  })}
                </RowContent>
              </Slider>
            </>
          )}
          <Box sx={{ marginBottom: "42px" }}></Box>
          {/* 사용자 리-뷰 => 유저의 프로필 사진, 이름, 리뷰 내용, 평점*/}
          <Reviews />
        </Box>
      )}
    </>
  )
}
