import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@mui/material';

import ReactResizeDetector from 'react-resize-detector';

import ServicePlayer  from './service-player';

import ServiceVideoShape from '../../constants/service-video-shape';

// import { makeStyles } from '@material-ui/core/styles';

import { SERVICE_CARD_MAX_WIDTH } from '../../constants/service-constants';

import PreferredServiceEnum from '../../constants/preferred-service-enum';

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
    const { tabValue, services, showSnackbar, youTubeIframeAPIReady, onPlayPause, cardWidth, isServiceCombinedWithMandarin } = props;

    return (
        <ServicePlayer playerID={tabValue} services={services} showSnackbar={showSnackbar}
            isServiceCombinedWithMandarin={isServiceCombinedWithMandarin}
            youTubeIframeAPIReady={youTubeIframeAPIReady}
            onPlayPause={onPlayPause}
            cardWidth={cardWidth}
        />
    );
}

export default function ServiceCard({showSnackbar, cantoneseServices, mandarinServices, englishServices}) {
    // const classes = useStyles();

    const [youTubeIframeAPIReady, setYouTubeIframeAPIReady] = React.useState(false);

    const handlePlayPauseChange = (service, isPlaying) => {
    };

    const isServiceCombinedWithMandarin = (youtubeVideoID) => youtubeVideoID !== "" && mandarinServices.some((service) => service.youtubeVideoID === youtubeVideoID);
    
    const isBrowser = typeof window !== "undefined"
    if (isBrowser && !youTubeIframeAPIReady) {
        if (window.YT) {
            setYouTubeIframeAPIReady(true);
        } else {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            window.onYouTubeIframeAPIReady = () => setYouTubeIframeAPIReady(true);

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }

    return (
        <ReactResizeDetector handleHeight={false}>
        {({width, targetRef}) =>
        <Card ref={targetRef}>
            <TabPanel tabValue={PreferredServiceEnum.ENGLISH} services={englishServices} showSnackbar={showSnackbar} youTubeIframeAPIReady={youTubeIframeAPIReady} onPlayPause={handlePlayPauseChange} cardWidth={width} isServiceCombinedWithMandarin={isServiceCombinedWithMandarin} />
        </Card>}
        </ReactResizeDetector>
    );
}

TabPanel.propTypes = {
    tabValue: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    showSnackbar: PropTypes.func.isRequired,
    youTubeIframeAPIReady: PropTypes.bool.isRequired,
    onPlayPause: PropTypes.func.isRequired,
    cardWidth: PropTypes.number,
    isServiceCombinedWithMandarin: PropTypes.func.isRequired,
};

ServiceCard.propTypes = {
    showSnackbar: PropTypes.func.isRequired,
    mandarinServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    cantoneseServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    englishServices: PropTypes.arrayOf(ServiceVideoShape).isRequired,
};