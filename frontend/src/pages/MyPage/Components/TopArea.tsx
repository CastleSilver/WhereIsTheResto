import { Box, Grid, Avatar } from "@mui/material"
import { useState } from "react"
import PaperBackGround from "../../CommonComp/PaperBackground"
import MyInfoUpdate from "../MyInfoUpdate"

// STYLING CODE
const nameStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "9vw",
  color: "rgb(2 49 119)",
}

const aztiStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "10vw",
  m: "auto",
  color: "rgba(228, 115, 39, 0.973)",
  wordBreak: "keep-all",
}

const recLen = "29vw"
export default function TopArea({ userInfo }: any) {
  // AZTI 정보 편집
  let [azti, setAZTI] = useState(localStorage.getItem("userKoreanAzti"))
  if (azti == "X" || azti === undefined) {
    setAZTI("AZTI 정보가 없습니다")
  }

  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <PaperBackGround>
          <Box sx={{ px: "2vw", py: "12px" }}>
            {/* 유저 닉네임 */}
            <Grid container>
              <Grid item xs={10} sx={nameStyle}>
                {userInfo.nickname}
              </Grid>
              <Grid item xs={2}>
                <MyInfoUpdate />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              {/* 유저 프로필 이미지 */}
              <Grid item xs={5}>
                <Avatar
                  src={userInfo.profileImageURL}
                  sx={{ width: recLen, height: recLen, m: "auto" }}
                />
              </Grid>
              {/* 유저 AZTI TYPE */}
              <Grid
                item
                container
                xs={7}
                sx={aztiStyle}
                justifyContent="center"
                alignContent={"center"}
              >
                <Grid item>{azti}</Grid>
              </Grid>
            </Grid>
          </Box>
        </PaperBackGround>
      </Box>
    </>
  )
}
