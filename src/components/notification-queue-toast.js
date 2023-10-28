import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function NotificationQueueToast() {
  const [snackPack, setSnackPack] = React.useState([{ msg: "Vote counts...", key: new Date().getTime() }, { msg: "Vote counts II...", key: 2 }])
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState(undefined)

  React.useEffect(() => {
    if (snackPack.length > 0 && !message) {
      // Set a new snack when there are still messages queued up
      setMessage({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    }
  }, [snackPack, message])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessage(undefined)
  }

  return (
    <Snackbar
      key={message?.key}
      message={message?.msg}
      open={open}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      autoHideDuration={5000}
      onClose={handleClose}
      TransitionProps={{ onExited: handleExited }}
      action={
        <React.Fragment>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </React.Fragment>
      }
    />
  )
}