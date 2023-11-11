import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Card, CardMedia,
    CardActions, CardActionArea, CardContent } from '@mui/material';

import {useI18next} from '@herob/gatsby-plugin-react-i18next'

import ServiceVideoShape from '../../constants/service-video-shape';

import ServiceDateDisplay from './service-date-display';

import SeekToMenu from './seek-to-menu';
import RecentServicesMenu from './recent-services-menu';

import DateTimeUtils from '../../modules/datetime-utils';
import ServiceVideoUtils from '../../modules/service-videos-utils';

import { SERVICE_CARD_MAX_WIDTH, SERVICE_VIDEO_WIDTH, SERVICE_VIDEO_HEIGHT } from '../../constants/service-constants';

const calcYouTubePlayerHeight = (playerWidth) => (
    playerWidth * SERVICE_VIDEO_HEIGHT / SERVICE_VIDEO_WIDTH
);

export default function ServicePlayer({services, showSnackbar, cardWidth, targetRef}) {
    const { t } = useI18next()

    let defaultServiceToShowIndex = 0;
    const isDefaultServiceJointService = ServiceVideoUtils.isRepeatService(defaultServiceToShowIndex, services);
    if (isDefaultServiceJointService) {
        defaultServiceToShowIndex = 1;
        const defaultServiceStartDateTimeStr = services[defaultServiceToShowIndex].date;
        if (ServiceVideoUtils.liveOver(defaultServiceStartDateTimeStr)) {
            defaultServiceToShowIndex = 0;
        }
    }

    const [serviceToShow, setServiceToShow] = React.useState(services[defaultServiceToShowIndex]);
    const [youTubePlayerReady, setYouTubePlayerReady] = React.useState(false);

    const serviceToShowIndex = services.findIndex(s => s === serviceToShow);
    const isRepeatService = serviceToShowIndex >= 0 && ServiceVideoUtils.isRepeatService(serviceToShowIndex, services);

    const youTubePlayerRef = React.useRef(null);

    const youtubeVideoID = serviceToShow.youtubeVideoID;
    const message = serviceToShow.message
    const pastor = serviceToShow.pastor
    const date = serviceToShow.date;
    const seekPoints = serviceToShow.seekPoints;

    const playerID = "youTubePlayer"; // PreferredServiceEnum.ENGLISH;

    React.useEffect(
        () => {
            const width = cardWidth || SERVICE_CARD_MAX_WIDTH;
            const height = calcYouTubePlayerHeight(width);

            if (!youTubePlayerRef.current) {
                const youtubePlayer = new window.YT.Player(playerID, {
                    width,
                    height,
                    videoId: youtubeVideoID,
                    playerVars: { origin: window.location.origin },
                    events: {
                        'onStateChange': onPlayerStateChange,
                        'onReady': onPlayerReady,
                    },
                });
                youTubePlayerRef.current = youtubePlayer;
            } else {
                youTubePlayerRef.current.setSize(width, height);
            }
        }, [youTubePlayerRef, cardWidth, youtubeVideoID]
    );

    const onPlayerStateChange = event => {
        const playing = event.data === window.YT.PlayerState.PLAYING;
    };

    const onPlayerReady = () => {
        setYouTubePlayerReady(true);
    };

    const onSeekTo = (seekPoint) => {
        const time = DateTimeUtils.parse(seekPoint.time);
        if (time.valid && youTubePlayerRef.current) {
            const playerState = youTubePlayerRef.current.getPlayerState();

            const seconds = ((60 * time.hour) + time.minute) * 60 + time.second;
            youTubePlayerRef.current.seekTo(seconds, true /* allowSeekAhead */);

            // If a video is cued, then the first seekTo call starts the video
            // playing from the beginning. Wait one second and call seekTo again
            // to go to the time point.
            if (playerState === window.YT.PlayerState.CUED) {
                const timer = setTimeout(() => {
                    window.clearTimeout(timer);
                    youTubePlayerRef.current.seekTo(seconds, true);
                }, 1000);
            }
        } else {
            showSnackbar(t("Unable_to_seek_to", {seekPoint: seekPoint.label}));
        }
    };

    const onServiceSelect = (service) => {
        if (youTubePlayerRef.current) {
            setServiceToShow(service);
            youTubePlayerRef.current.cueVideoById(service.youtubeVideoID);
        } else {
            showSnackbar(t("Unable_to_load", {service: service.message}));
        }
    };

    return (
        <Card ref={targetRef}>
        <CardActionArea>
            <CardMedia
                component="div"
                frameBorder="0"
                id={playerID}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            />
        </CardActionArea>
        <CardContent>
            <Typography gutterBottom variant="body1" component="p">
                {message}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {pastor} &middot; <ServiceDateDisplay serviceStartDateTime={date} showTimeToo={isRepeatService} />
            </Typography>
        </CardContent>
        <CardActions>
            <SeekToMenu seekPoints={seekPoints} onSeekTo={onSeekTo} youTubePlayerReady={youTubePlayerReady} />
            <RecentServicesMenu
                services={services}
                defaultServiceIndex={defaultServiceToShowIndex}
                onServiceSelect={onServiceSelect}
                onOlderServicesSelect={() => showSnackbar(t("Not implemented"))}
                youTubePlayerReady={youTubePlayerReady}
            />
        </CardActions>
        </Card>
    )
}

ServicePlayer.propTypes = {
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    showSnackbar: PropTypes.func.isRequired,
    cardWidth: PropTypes.number,
    targetRef: PropTypes.object.isRequired,
};