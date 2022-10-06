// React 시스템 Import
import { useAppDispatch, useAppSelector } from "../../userStore/hooks"
import {
  likeRestoAsync,
  selectResto,
  vstRestoAsync,
} from "../../userStore/restoSlice"

// 기타 라이브러리 Import
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import PinDropIcon from "@mui/icons-material/PinDrop"
import { Box, Grid, Button } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BeenhereIcon from "@mui/icons-material/Beenhere"

// Components Import
import PaperBackground from "../../CommonComp/PaperBackground"
import "./RestoArea.scss"
import Swal from "sweetalert2"

const recArea = {
  position: "relative",
  width: "49.5vw",
  height: "49.5vw",
  borderRadius: "15px",
  overflow: "hidden",
  marginBottom: "24px",
}

const imgStyle: {} = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const titleStyle = {
  fontFamily: "BMEULJIRO",
  fontSize: "11vw",
  textAlign: "left",
  marginBottom: "6px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  color: "rgb(216 99 69)",
}

const ratingStyle = {
  textAlign: "left",
  fontSize: "6.5vw",
  color: "#E3B574",
}

const contentStyle: {} = {
  fontFamily: "Chosun",
  fontWeight: "bold",
  color: "black",
  margin: "0",
  fontSize: "6vw",
  textAlign: "left",
  marginBottom: "8px",
  borderBottom: "solid 2px rgba(0, 0, 0, 0.4)",
}

const iconStyle = {
  width: "6.4vw",
  height: "6.4vw",
  paddingRight: "2.5vw",
  marginTop: "auto",
  marginBottom: "auto",
}

export default function RestoArea() {
  const resto = useAppSelector(selectResto)
  const dispatch = useAppDispatch()
  const address = resto?.address.split(" ").slice(1, -1).join(" ")

  const isLong = (word: string) => {
    return word.length >= 9
  }

  return (
    <div>
      <PaperBackground>
        {resto === undefined && <div>로딩 중</div>}
        {resto !== undefined && (
          <Grid sx={{ px: "12px", py: "8px" }}>
            {/* 제목, 별점 */}
            <Grid container>
              <Grid item xs={12} sx={titleStyle} className="text-container">
                <span className={isLong(resto.name) ? "animate" : ""}>
                  {resto.name}
                </span>
              </Grid>
            </Grid>

            {/* 이미지, 기타 정보들 */}
            <Grid container>
              <Grid item xs={12} sx={recArea}>
                <img src={resto.thumbnail} style={imgStyle} />
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="column"
                justifyContent={"space-evenly"}
                alignContent={"start"}
                sx={{ paddingLeft: "10px" }}
              >
                <Grid container justifyContent={"space-between"}>
                  <Grid
                    item
                    container
                    xs={6}
                    sx={{ ...contentStyle, ...ratingStyle }}
                  >
                    ★ {Number(resto.rating).toFixed(1)}
                  </Grid>

                  <Grid
                    item
                    container
                    sx={{ ...contentStyle, fontSize: "6.5vw" }}
                    xs={6}
                  >
                    <AccessTimeFilledIcon sx={iconStyle} />
                    {resto.restoAge}
                  </Grid>
                </Grid>
                <Grid container sx={contentStyle}>
                  <PinDropIcon sx={iconStyle} />
                  {address}
                </Grid>
                <Grid container sx={contentStyle}>
                  <LocalDiningIcon sx={iconStyle} />
                  <Box
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      width: "80%",
                    }}
                  >
                    {resto.menu1}, {resto.menu2}
                  </Box>
                </Grid>

                {/* 좋아요 & 가본 곳 */}
                <Grid container sx={{ mt: "0px" }}>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => {
                        dispatch(likeRestoAsync(resto.id))
                        Swal.fire({
                          title: "좋아요 등록/취소 완료",
                          timer: 900,
                          showConfirmButton: false,
                        })
                      }}
                    >
                      {resto.liked ? (
                        <FavoriteIcon
                          color="warning"
                          sx={{ fontSize: "11vw" }}
                        />
                      ) : (
                        <FavoriteBorderIcon
                          color="disabled"
                          sx={{ fontSize: "11vw" }}
                        />
                      )}
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => {
                        dispatch(vstRestoAsync(resto.id))
                        Swal.fire({
                          title: "방문한 곳 등록/취소 완료",
                          timer: 900,
                          showConfirmButton: false,
                        })
                      }}
                    >
                      <BeenhereIcon
                        color={resto.visited ? "warning" : "disabled"}
                        sx={{ fontSize: "11vw" }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </PaperBackground>
    </div>
  )
}
