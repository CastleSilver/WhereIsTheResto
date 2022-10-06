import { Box } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"

const emptyStyle = {
  fontSize: "11vw",
  wordBreak: "keep-all",
}

const msgLst = ["좋아요를 누른 가게가 없습니다.", "방문 등록한 가게가 없습니다"]

export default function RestoLList({ restos, cat }: any) {
  return (
    <>
      {restos.length === 0 && <Box sx={emptyStyle}>{msgLst[cat]}</Box>}
      {restos.map((resto: any, index: number) => {
        return (
          <Box key={index} sx={{ mb: "12px" }}>
            <RestoInfo resto={resto} />
          </Box>
        )
      })}
    </>
  )
}
