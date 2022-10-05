// React 시스템 Import
import * as React from "react"
import { useNavigate } from "react-router-dom"

// 기타 라이브러리 Import
import SettingsIcon from "@mui/icons-material/Settings"
import DialogTitle from "@mui/material/DialogTitle"
import ListItem from "@mui/material/ListItem"
import Dialog from "@mui/material/Dialog"
import List from "@mui/material/List"
import { Box } from "@mui/material"

const options = ["AZTI 재검사", "닉네임 변경"]
const links = ["/azti", ""]
export interface SimpleDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

function SimpleDialog(props: SimpleDialogProps) {
  const navigate = useNavigate()
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
  }

  const titleStyle = {
    fontFamily: "CHOSUN",
    textAlign: "center",
    fontSize: "8vw",
    borderBottom: "solid 1px rgba(0, 0, 0, 0.6)",
    fontWeight: "bold",
    color: "rgb(2 49 119)",
    mb: "16px",
  }

  const optionStyle = {
    fontFamily: "BMEULJIRO",
    textAlign: "center",
    fontSize: "7vw",
    width: "100%",
    height: "10vw",
    pb: "16px",
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ width: "80vw", backgroundColor: "rgb(241 236 232)" }}>
        <DialogTitle>
          <Box sx={titleStyle}>회원 정보 수정</Box>
        </DialogTitle>
        {/* 모달 창 */}
        <List sx={{ pt: 0 }}>
          {options.map((option) => (
            <ListItem
              button
              onClick={() => handleListItemClick(option)}
              key={option}
            >
              <Box sx={optionStyle} onClick={() => navigate("")}>
                {option}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Dialog>
  )
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(options[1])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (value: string) => {
    setOpen(false)
    setSelectedValue(value)
  }

  return (
    <div>
      <span
        onClick={handleClickOpen}
        style={{ fontSize: "24px", color: "rgb(2 49 119)" }}
      >
        <SettingsIcon />
      </span>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  )
}
