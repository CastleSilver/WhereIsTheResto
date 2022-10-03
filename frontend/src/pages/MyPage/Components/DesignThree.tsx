import PaperBackground from "../../CommonComp/PaperBackground"
import MyInfoUpdate from "../MyInfoUpdate"
import { Box, Grid } from "@mui/material"

export default function DesignTwo({ userInfo }: any) {
  const userInfoStyle = {
    fontSize: "5vw",
    paddingBottom: "12px",
    borderBottom: "solid 2px rgba(0, 0, 0, 0.4)",
  }

  const aztiStyle = {
    pt: "12px",
    fontSize: "8vw",
    color: "rgb(228, 73, 39)",
  }

  const imgFrame: {} = {
    boxSizing: "border-box",
    position: "static",
    borderRadius: "50%",
    border: "solid 1px rgba(217, 217, 217, 0.9)",
    width: "8vw",
    height: "8vw",
    overflow: "hidden",
  }

  const imgStlye: {} = {
    objectFit: "cover",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }

  return (
    <PaperBackground>
      <Box style={{ padding: "16px" }}>
        {/* 카드 Area */}
        <Grid container alignItems="center" sx={userInfoStyle}>
          <Grid item xs={1.5}>
            <Box sx={imgFrame}>
              <img
                src={`${userInfo.profileImageURL}`}
                width="100%"
                style={imgStlye}
              />
            </Box>
          </Grid>
          <Grid item xs={9.5} sx={{ textAlign: "center" }}>
            <Box>{userInfo.nickname}</Box>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: "center" }}>
            <MyInfoUpdate />
          </Grid>
        </Grid>

        <Box sx={aztiStyle}>{userInfo.aztiType}</Box>
        {/* 카드 Area */}
      </Box>
    </PaperBackground>
  )
}
