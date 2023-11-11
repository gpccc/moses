import React from 'react';
import PropTypes from 'prop-types';

import { Box, CircularProgress, Container } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ServicePlayer  from '../components/services/service-player';

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

import englishServices from '../constants/english-services'
import mandarinServices from '../constants/mandarin-services'
import cantoneseServices from '../constants/cantonese-services';

function SanitizeServices(services, t) {
    services.forEach((service) => {
        service.message = (service.message ?? "").trim() || t("Message: TBD");
        service.pastor = (service.pastor ?? "").trim() || t("Speaker: TBD");
    })
}

export default function ServiceViewer({showSnackbar}) {
    const { i18n, t } = useI18next()
    let services = englishServices
    if (i18n.language === "zf")
        services = cantoneseServices
    else if (i18n.language === "zh")
        services = mandarinServices
    SanitizeServices(services, t)

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
        <ServicePlayer services={services} showSnackbar={showSnackbar}
            cardWidth={width} targetRef={targetRef}
        />}
        </ReactResizeDetector>
        :
        <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
        </Box>
        }
        </Container>
    );
}

ServiceViewer.propTypes = {
    showSnackbar: PropTypes.func,
}