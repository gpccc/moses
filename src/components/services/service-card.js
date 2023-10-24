import React from 'react';
import PropTypes from 'prop-types';

import { Box, Card, CircularProgress } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ServicePlayer  from './service-player';

import ServiceVideoShape from '../../constants/service-video-shape';

import { useI18next } from '@herob/gatsby-plugin-react-i18next'

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

function TabPanel(props) {
    const { services, showSnackbar, onPlayPause, cardWidth } = props;
    const youTubeIframeAPIReady = window.YT

    return (youTubeIframeAPIReady ?
        <ServicePlayer services={services} showSnackbar={showSnackbar}
            onPlayPause={onPlayPause}
            cardWidth={cardWidth}
        />
        :
        <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
        </Box>
    );
}

export default function ServiceCard({showSnackbar, cantoneseServices, mandarinServices, englishServices}) {
    // const classes = useStyles();

    const handlePlayPauseChange = (service, isPlaying) => {
    };

    const { i18n } = useI18next()
    let services = englishServices
    if (i18n.language === "zf")
        services = cantoneseServices
    else if (i18n.language === "zh")
        services = mandarinServices

    return (
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card ref={targetRef}>
            <TabPanel services={services} showSnackbar={showSnackbar} onPlayPause={handlePlayPauseChange} cardWidth={width} />
        </Card>}
        </ReactResizeDetector>
    );
}

TabPanel.propTypes = {
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    showSnackbar: PropTypes.func.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    cardWidth: PropTypes.number,
};

ServiceCard.propTypes = {
    showSnackbar: PropTypes.func.isRequired,
    mandarinServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    cantoneseServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    englishServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
};