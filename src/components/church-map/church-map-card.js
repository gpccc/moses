import React from 'react';

import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import { Box, Typography, Link, Card,
    CardHeader, CardActions, CardActionArea, CardContent } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ChurchMap from './church-map';

export default function ChurchMapCard() {
    return (
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card ref={targetRef} sx={{maxWidth: 640, m: 2}}>
            <CardHeader title="Location" titleTypographyProps={{variant: 'button'}} />
            <CardActionArea>
                <ChurchMap mapWidth={width} preferredLanguage="en" />
            </CardActionArea>
            <CardContent>
                <Link target="_blank" rel="noreferrer" href="https://maps.google.com/?q=Greater Phoenix Chinese Christian Church, West Ray Road, Chandler, AZ">
                    <Box display="flex">
                        <Box mr={1}><MapIcon fontSize="small" /></Box>
                        Greater Phoenix Chinese Christian Church<br/>
                        890 West Ray Road<br/>
                        Chandler, AZ 85225
                    </Box>
                </Link>

                <Link href="tel:+1-480-786-4977">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}><PhoneIcon fontSize="small" /></Box>
                        (480) 786-4977
                    </Box>
                </Link>
                <Link href="mailto:contact@gpccc.org">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}><EmailIcon fontSize="small" /></Box>
                        contact@gpccc.org
                    </Box>
                </Link>
            </CardContent>
            <CardActions>
                <Box pl={1}>
                <Link href="tel:+1-480-786-4977">
                    <Typography variant="button">Call us</Typography>
                </Link>
                </Box>
                <Box pl={1}>
                <Link href="mailto:contact@gpccc.org">
                    <Typography variant="button">Email us</Typography>
                </Link>
                </Box>
            </CardActions>
        </Card>}
        </ReactResizeDetector>
    );
}