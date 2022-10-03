import { Box, Grid, Avatar } from "@mui/material"
import PaperBackGround from "../../CommonComp/PaperBackground"

// STYLING CODE
const nameStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "6.2vw",
  mb: "16px",
  color: "rgb(2 49 119)",
}

const aztiStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "6.2vw",
  mb: "16px",
  color: "rgba(228, 115, 39, 0.973)",
}

const recLen = "29vw"
export default function TopArea({ userInfo }: any) {
  // AZTI 정보 편집
  const temp = userInfo.aztiType.split(" ")
  const azti = [temp[0] + " " + temp[1], temp[2] + " " + temp[3]]
  const nameSize = userInfo.nickname.length * 2
  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <PaperBackGround>
          <Box sx={{ px: "2vw", py: "12px" }}>
            {/* 유저 닉네임 */}
            <Box sx={nameStyle}>{userInfo.nickname}</Box>
            <Grid container alignItems="center">
              {/* 유저 프로필 이미지 */}
              <Grid item xs={5}>
                <Avatar
                  src={userInfo.profileImageURL}
                  sx={{ width: recLen, height: recLen, m: "auto" }}
                />
              </Grid>
              {/* 유저 AZTI TYPE */}
              <Grid item xs={7} sx={aztiStyle}>
                <Box sx={{ pb: "16px" }}>{azti[0]}</Box>
                <Box>{azti[1]}</Box>
              </Grid>
            </Grid>
          </Box>
        </PaperBackGround>
      </Box>
    </>
  )
}
