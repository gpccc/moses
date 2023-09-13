import React from "react"

import CssBaseline from "@mui/material/CssBaseline"

import AppBar from "@mui/material/AppBar"
import Button from '@mui/material/Button'
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ChurchIcon from "@mui/icons-material/Church"

import CongregationTabs from "./congregation-tabs"

import VotingProgress from "../views/voting-progress"
import AppFooter from "../views/app-footer"

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
const Layout = ({ children }) => (
    <>
    <CssBaseline />
    <AppBar position="static" color="secondary">
        <VotingProgress />
        <Container maxWidth="false">
            <Toolbar disableGutters>
                <ChurchIcon sx={{ mr: 1 }} />
                <Typography
                    variant="h5"
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1,
                    }}
                >
                    GPCCC
                </Typography>
                <Button href={onlineGivingLink} target="_blank" variant="contained" size="large" color="primary" sx={{display: { xs: 'none', md: 'flex' }}}>Online Giving</Button>
                <Button href={onlineGivingLink} target="_blank" variant="contained" size="small" color="primary" sx={{display: { xs: 'flex', md: 'none' }}}>Online Giving</Button>
            </Toolbar>
        </Container>
    </AppBar>
    <CongregationTabs />
    {children}
    <AppFooter />
    </>
)

export default Layout