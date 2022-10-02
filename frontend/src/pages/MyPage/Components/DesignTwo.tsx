import PaperBackground from "../../CommonComp/PaperBackground"
import { Box, Grid } from "@mui/material"

export default function DesignTwo({ userInfo }: any) {
  const userInfoStyle = {
    fontSize: "5.5vw",
    borderBottom: "solid 2px rgba(0, 0, 0, 0.4)",
  }

  const aztiStyle = {
    pt: "12px",
    fontSize: "8vw",
    color: "rgb(228, 73, 39)",
  }

  return (
    <PaperBackground>
      <Box style={{ padding: "16px" }}>
        {/* 카드 Area */}
        <Grid container alignItems="center" sx={userInfoStyle}>
          <Grid item xs={1.5}>
            <img src={`${userInfo.profileImageURL}`} width="100%" />
          </Grid>
          <Grid item xs={10.5} sx={{ textAlign: "center" }}>
            <Box>{userInfo.nickname}</Box>
          </Grid>
        </Grid>

        <Box sx={aztiStyle}>{userInfo.aztiType}</Box>
        {/* 카드 Area */}
      </Box>
    </PaperBackground>
  )
}
