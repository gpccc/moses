import React from 'react';

import { Box, Card, CircularProgress, Container } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ServicePlayer  from '../components/services/service-player';

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

import englishServices from '../constants/english-services'
import mandarinServices from '../constants/mandarin-services'
import cantoneseServices from '../constants/cantonese-services';

export default function ServiceViewer() {
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
        {youTubeIframeAPIReady
        ?
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card ref={targetRef}>
            <ServicePlayer services={services} showSnackbar={msg => console.info('snackbar', msg)}
                onPlayPause={handlePlayPauseChange}
                cardWidth={width}
            />
        </Card>}
        </ReactResizeDetector>
        :
        <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
        </Box>
        }
        </Container>
    );
}