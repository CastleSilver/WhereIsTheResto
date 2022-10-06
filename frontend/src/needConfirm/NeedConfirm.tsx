import { Box, Avatar, Grid } from "@mui/material"
import React from "react"
import styled from "styled-components"
import PaperBackground from "../pages/CommonComp/PaperBackground"

const Slider = styled.div`
  position: relative;
  overflow: hidden;
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
  width: "30vw";
`
export default function NeedConfirm() {
  const urls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlk8sFqbrlBE50xhBYL2LqVii-hcl_Ee_YmswhZNfH&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yE7kRFq3KXSSn-Md6z009USVcmPv9yJWlaG9WIJYS0fNofX4MYVZQaToNszJoAWCn1k&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_suXIu8UtbeSAta1ejMU36GZdZ8yy8D7qxamwBWj3Tr1T2PHTtdLmzyA_H4ug24Ss7o&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_suXIu8UtbeSAta1ejMU36GZdZ8yy8D7qxamwBWj3Tr1T2PHTtdLmzyA_H4ug24Ss7o&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_suXIu8UtbeSAta1ejMU36GZdZ8yy8D7qxamwBWj3Tr1T2PHTtdLmzyA_H4ug24Ss7o&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_suXIu8UtbeSAta1ejMU36GZdZ8yy8D7qxamwBWj3Tr1T2PHTtdLmzyA_H4ug24Ss7o&usqp=CAU",
  ]
  return (
    <>
      <PaperBackground>
        <Grid container>
          <Grid sx={{ p: "24px", overflowX: "scroll" }}>
            <Slider>
              <RowContent className="kill-scroll">
                {urls.map((url: string, index: number) => {
                  return (
                    <Content key={index}>
                      <Avatar
                        src={`${url}`}
                        sx={{ width: "40vw", height: "40vw" }}
                        variant="rounded"
                      />
                    </Content>
                  )
                })}
              </RowContent>
            </Slider>
          </Grid>
        </Grid>
      </PaperBackground>
    </>
  )
}
