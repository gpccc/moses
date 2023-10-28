import React from 'react';

import { Box, Card, CircularProgress, Container } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ServicePlayer  from './service-player';

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

import englishServices from '../../constants/english-services'
import mandarinServices from '../../constants/mandarin-services'
import cantoneseServices from '../../constants/cantonese-services';

// import { makeStyles } from '@material-ui/core/styles';

import { SERVICE_CARD_MAX_WIDTH } from '../../constants/service-constants';

/*
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 640 + SERVICE_CARD_MAX_WIDTH - SERVICE_CARD_MAX_WIDTH, // SERVICE_CARD_MAX_WIDTH,
    },
    tab: {
        lineHeight: 'normal',
        [theme.breakpoints.up("sm")]: {
            minWidth: 'inherit',
        }
    },
}));
*/

export default function ServiceCard() {
    // const classes = useStyles();

    const handlePlayPauseChange = (service, isPlaying) => {
    };

    const { i18n } = useI18next()
    let services = englishServices
    if (i18n.language === "zf")
        services = cantoneseServices
    else if (i18n.language === "zh")
        services = mandarinServices

    const youTubeApiLoaded = typeof(window.YT) !== 'undefined'

    const [youTubeIframeAPIReady, setYouTubeIframeAPIReady] = React.useState(youTubeApiLoaded);
    if (typeof(window.onYouTubeIframeAPIReady) === 'undefined') {
        window.onYouTubeIframeAPIReady = () => setYouTubeIframeAPIReady(true);
    }

    return (
        <Container component="section" sx={{ my: 4 }}>
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card ref={targetRef}>
            {youTubeIframeAPIReady
            ?
            <ServicePlayer services={services} showSnackbar={msg => console.info('snackbar', msg)}
                onPlayPause={handlePlayPauseChange}
                cardWidth={width}
            />
            :
            <Box display="flex" justifyContent="center" my={4}>
                <CircularProgress />
            </Box>
            }
        </Card>}
        </ReactResizeDetector>
        </Container>
    );
}