import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function VotingProgress() {
  const [snackPack, setSnackPack] = React.useState([{ message: "Vote counts...", key: new Date().getTime() }])
  const [open, setOpen] = React.useState(true)
  const [messageInfo, setMessageInfo] = React.useState(undefined)

  React.useEffect(() => {
    // componentDidMount() {}
    const externalScript = document.createElement('script')
    externalScript.src = 'https://secure.electionbuddy.com/widget/VJ893ZSSHTWY.js'
    externalScript.defer = true
    document.head.append(externalScript)

    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] })
      setSnackPack((prev) => prev.slice(1))
      setOpen(true)
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false)
    }

    // componentWillUnmount() {}
    return () => {
        externalScript.remove()
    }
  }, [snackPack, messageInfo, open])

  const handleClick = (message) => () => {
    message = "Vote counts..."
    setSnackPack((prev) => [...prev, { message: "Vote counts...", key: new Date().getTime() }])
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleExited = () => {
    setMessageInfo(undefined)
  }

  return (
    <div>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        autoHideDuration={15000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? <div id="electionbuddy-VJ893ZSSHTWY"></div> : undefined}
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