import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Link as Linki18n} from '@herob/gatsby-plugin-react-i18next'
import Typography from '@mui/material/Typography';

import {Trans} from '@herob/gatsby-plugin-react-i18next'

import ChurchIcon from "@mui/icons-material/Church"

// TODO: don't hard-code MUI class styles
const muiLinkStyle = "MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-bvyohc-MuiTypography-root-MuiLink-root"

const Copyright = () => (
  <>
  {'Copyright ©'}
  {new Date().getFullYear()}
  {' '}
  <Linki18n to="/" className={muiLinkStyle}>
  <Trans>Greater Phoenix Chinese Christian Church</Trans>
  </Linki18n>
  </>
)

const AppFooter = () => (
  <Box
    component="footer"
    sx={{ p: 4, display: 'flex', flexDirection: 'column', color: 'white', bgcolor: 'rgb(53, 54, 55)' }}
  >
    <Box display="flex" sx={{ pb: 3 }}>
    <ChurchIcon sx={{ mr: 1 }} />
    <Typography
      variant="h5"
      sx={{
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <Trans>GPCCC</Trans>
    </Typography>
    </Box>

    <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}}}>
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Link target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Greater Phoenix Chinese Christian Church, West Ray Road, Chandler, AZ" color="inherit" underline="hover">
      <Box display="flex">
        <Trans>Greater Phoenix Chinese Christian Church</Trans><br/>
        890 West Ray Road<br/>
        Chandler, AZ 85225
      </Box>
    </Link>

    <Link href="tel:+1-480-786-4977" color="inherit" underline="hover">
      (480) 786-4977
    </Link>

    <Link href="mailto:contact@gpccc.org" color="inherit" underline="hover" >
      contact@gpccc.org
    </Link>
    </Box>

    <Box sx={{display: 'flex', flexDirection: 'column', ml: {xs: 0, sm: 6}, mt: {xs: 2, sm: 0}}}>
    <Linki18n to="/about-us/" className={muiLinkStyle}>
      <Trans>Our belief and purpose</Trans>
    </Linki18n>

    <Link href="#" color="inherit" underline="hover">
      <Trans>Employment opportunities</Trans>
    </Link>
    </Box>
    </Box>

    <Typography variant="caption" color="inherit" underline="hover" sx={{ pt: 4 }}>
      <Copyright />
    </Typography>
  </Box>
)

export default AppFooter