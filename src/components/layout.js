import React from "react"

import CssBaseline from "@mui/material/CssBaseline"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import ChurchIcon from "@mui/icons-material/Church"

export const Head = () =>
    <>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <link
        id="mui-roboto-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    </>

const Layout = ({ children }) => (
    <>
    <CssBaseline />
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <ChurchIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Greater Phoenix Chinese Christian Church
                </Typography>

                <ChurchIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    GPCCC
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
    {children}
    </>
)

export default Layout