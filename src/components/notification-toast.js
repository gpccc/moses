import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function NotificationToast() {
  const [snackPack, setSnackPack] = React.useState([{ msg: "Vote counts...", key: new Date().getTime() }, { msg: "Vote counts II...", key: 2 }])
  const [open, setOpen] = React.useState(false)
  const [message, setMessage] = React.useState(undefined)

  React.useEffect(() => {
    if (snackPack.length && !message) {
      // Set a new snack when we don't have an active one
      console.info("snackPack", snackPack)
      setMessage({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    } else if (snackPack.length && message && open) {
      // Close an active snack when a new one is added
      // setOpen(false)
    }
  }, [snackPack, message, open])

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }])
  }

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
    <div>
      <Snackbar
        key={message ? message.key : undefined}
        open={open}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={message ? message.msg : undefined}
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
    </div>
  )
}