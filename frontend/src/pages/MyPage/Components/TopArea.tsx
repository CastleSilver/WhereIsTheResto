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
  fontSize: "10vw",
  m: "auto",
  color: "rgba(228, 115, 39, 0.973)",
}

const recLen = "29vw"
export default function TopArea({ userInfo }: any) {
  // AZTI 정보 편집
  let azti = localStorage.getItem("userKoreanAzti") || "X"

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
