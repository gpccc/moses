import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function NotificationQueueToast() {
  const [snackPack, setSnackPack] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState(undefined)

  React.useEffect(() => {
    if (snackPack.length > 0 && !message) {
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

  const showSnackbar = (msg) => { setSnackPack([...snackPack, {msg, key: new Date().getTime()}]) }

  return {
    showSnackbar,
    notificationQueueToast:
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
  }
}