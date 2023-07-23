import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ChurchIcon from "@mui/icons-material/Church"

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
      GPCCC
    </Typography>
    </Box>

    <Grid container rowSpacing={2} columnSpacing={1}>
      <Grid xs={12} sm={7} md={5} lg={4} xl={3}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Link target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Greater Phoenix Chinese Christian Church, West Ray Road, Chandler, AZ" color="inherit" underline="hover">
          <Box display="flex">
            Greater Phoenix Chinese Christian Church<br/>
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
      </Grid>

      <Grid>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Link href="#" color="inherit" underline="hover">
            Our belief and purpose
          </Link>

          <Link href="#" color="inherit" underline="hover">
            Careers
          </Link>
        </Box>
      </Grid>
    </Grid>

    <Typography variant="caption" color="inherit" underline="hover" sx={{ pt: 4 }}>
      <Copyright />
    </Typography>
  </Box>
)

export default AppFooter