import React from "react"

import CssBaseline from "@mui/material/CssBaseline"

import AppBar from "@mui/material/AppBar"
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ChurchIcon from "@mui/icons-material/Church"

import {Link as Linki18n, Trans} from '@herob/gatsby-plugin-react-i18next'

import CongregationTabs from "./congregation-tabs"

// import VotingProgress from "../views/voting-progress"
import NotificationToast from "./notification-toast"

import AppFooter from "../views/app-footer"

import "./layout.css"

export const Head = () =>
    <>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link
        id="mui-roboto-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    </>

const onlineGivingLink = "http://gpccc.org/2020/05/12/support-gpccc-online-giving-%e6%94%af%e6%8c%81%e5%87%a4%e5%9f%8e%e6%95%99%e4%bc%9a-%e7%88%b1%e5%bf%83%e5%a5%89%e7%8c%ae/"
const Layout = ({ children, showCongregationTabs = true }) => (
    <>
    <CssBaseline />
    <AppBar position="static" color="secondary">
        {/* <VotingProgress /> */}
        { <NotificationToast />}
        <Container maxWidth="false">
            <Toolbar disableGutters>
                <ChurchIcon sx={{ mr: 1 }} />

                <Box sx={{flexGrow: 1, mr: 2,}}>
                <Linki18n to="/" className="noUnderline">
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 700,
                        color: 'white',
                    }}
                >
                    <Trans>GPCCC</Trans>
                </Typography>
                </Linki18n>
                </Box>

                <Button href={onlineGivingLink} target="_blank" variant="contained" size="large" color="primary" sx={{display: { xs: 'none', md: 'flex' }}}><Trans>Online Giving</Trans></Button>
                <Button href={onlineGivingLink} target="_blank" variant="contained" size="small" color="primary" sx={{display: { xs: 'flex', md: 'none' }}}><Trans>Online Giving</Trans></Button>
            </Toolbar>
        </Container>
    </AppBar>
    {showCongregationTabs && <CongregationTabs />}
    {children}
    <AppFooter />
    </>
)

export default Layout