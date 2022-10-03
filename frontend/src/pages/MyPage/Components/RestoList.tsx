import { Box } from "@mui/material"
import RestoInfo from "../../CommonComp/RestoInfo"

export default function RestoLList({ restos }: any) {
  return (
    <>
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
