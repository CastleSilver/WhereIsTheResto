import { Grid, Avatar } from "@mui/material"

export default function UserProfile({ userInfo }: any) {
  return (
    <Grid
      container
      sx={{ width: "100%" }}
      display="flex"
      direction="column"
      alignItems={"center"}
    >
      <Avatar
        src={`${userInfo.profileImageURL}`}
        alt="asd"
        sx={{ width: "34vw", height: "34vw" }}
      />

      <span className="content-text-sm">{userInfo.nickname}</span>
    </Grid>
  )
}
