import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ChurchIcon from "@mui/icons-material/Church"
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Copyright = () => (
  <>
  {'Copyright ©'}
  {new Date().getFullYear()}
  {' '}
  <Link color="inherit" underline="hover" href="/">
  Greater Phoenix Chinese Christian Church
  </Link>
  </>
)

const AppFooter = () => (
  <Typography
    component="footer"
    sx={{ p: 4, display: 'flex', flexDirection: 'column', color: 'white', bgcolor: 'rgb(53, 54, 55)' }}
  >
    <Box display="flex">
    <ChurchIcon sx={{ mr: 1 }} />
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      GPCCC
    </Typography>
    </Box>

    <Link target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Greater Phoenix Chinese Christian Church, West Ray Road, Chandler, AZ" color="inherit" underline="hover" sx={{ pt: 2, pb: 1}}>
      <Box display="flex">
        <Box mr={1}><MapIcon fontSize="small" /></Box>
        Greater Phoenix Chinese Christian Church<br/>
        890 West Ray Road<br/>
        Chandler, AZ 85225
      </Box>
    </Link>

    <Link href="tel:+1-480-786-4977" color="inherit" underline="hover" sx={{ pb: 1}}>
      <Box display="flex" alignItems="center">
        <Box mr={1}><PhoneIcon fontSize="small" /></Box>
        (480) 786-4977
      </Box>
    </Link>

    <Link href="mailto:contact@gpccc.org" color="inherit" underline="hover" >
      <Box display="flex" alignItems="center">
        <Box mr={1}><EmailIcon fontSize="small" /></Box>
        contact@gpccc.org
      </Box>
    </Link>

    <Typography variant="caption" color="inherit" underline="hover" sx={{ pt: 4 }}>
      <Copyright />
    </Typography>
  </Typography>
)

export default AppFooter