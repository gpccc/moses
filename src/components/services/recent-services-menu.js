import React from 'react';
import PropTypes from 'prop-types';

import {Trans} from '@herob/gatsby-plugin-react-i18next'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import ListItemText from '@mui/material/ListItemText';

import ServiceVideoShape from '../../constants/service-video-shape';

import {useI18next} from '@herob/gatsby-plugin-react-i18next'

import DateTimeUtils from '../../modules/datetime-utils';
import ServiceVideoUtils from '../../modules/service-videos-utils';

import { NUM_RECENT_SERVICES_TO_SHOW } from '../../constants/service-constants';

function getServicesToShow(services) {
    let numPastServices = 0;
    let numStreamingServices = 0;

    let maxServicesToShow = NUM_RECENT_SERVICES_TO_SHOW;
    let repeatServiceDate = new Date(0);

    services.forEach((service, index) => {
        let secondsElapsedSince = DateTimeUtils.getSecondsElapsedSince(service.date);
        if (ServiceVideoUtils.isLiveStream(secondsElapsedSince)) {
            numStreamingServices += 1;
        } else {
            if (ServiceVideoUtils.isRepeatService(index, services)) {
                const serviceDate = DateTimeUtils.getDateComponent(services[index].date);
                if (serviceDate.getTime() === repeatServiceDate.getTime()) {
                    maxServicesToShow += 1; // count repeat services on the same day as one
                }

                repeatServiceDate = serviceDate;
            }

            numPastServices += 1;
        }
    });

    const numServicesToShow = numStreamingServices + Math.min(numPastServices, maxServicesToShow);
    return services.slice(0, numServicesToShow);
}

export default function RecentServicesMenu({services, defaultServiceIndex, onServiceSelect, onOlderServicesSelect, youTubePlayerReady}) {
    const { t } = useI18next()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(defaultServiceIndex);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleServiceMenuItemClick = (index, youtubeVideoID) => {
        setSelectedIndex(index);
        setAnchorEl(null);

        const service = services.find(s => s.youtubeVideoID === youtubeVideoID);
        if (typeof service !== 'undefined') {
            onServiceSelect(service);
        }
    };

    const handleOlderServicesItemClick = () => {
        setAnchorEl(null);
        onOlderServicesSelect();
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    const servicesToShow = getServicesToShow(services);

    return (
        <div>
            <Button size="small" color="primary" aria-controls="recent-services-menu" aria-haspopup="true" onClick={handleClick} disabled={!youTubePlayerReady}>
                <Trans>Recent services</Trans>
            </Button>
            <Menu
                id="recent-services-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {servicesToShow.map((service, index) => {
                    const jointService = ServiceVideoUtils.isRepeatService(index, servicesToShow);

                    const message = (service.message ?? "").trim() || t("Message: TBD");
                    const pastor = (service.pastor ?? "").trim() || t("Speaker: TBD");
                    
                    return (
                    <MenuItem key={"YT" + service.youtubeVideoID} selected={index === selectedIndex} onClick={() => handleServiceMenuItemClick(index, service.youtubeVideoID)}>
                        <ListItemText primary={message} secondary={pastor + " · " + DateTimeUtils.shortServiceDateTimeDisplay({datetime: service.date, showTimeToo: jointService})} />
                    </MenuItem>
                    );
                })}

                <Divider />

                <MenuItem key="OlderServices" onClick={() => handleOlderServicesItemClick()}>
                    <Trans>Older services</Trans>
                </MenuItem>
            </Menu>
        </div>
    );
}

RecentServicesMenu.propTypes = {
    services: PropTypes.arrayOf(ServiceVideoShape).isRequired,
    defaultServiceIndex: PropTypes.number.isRequired,
    onServiceSelect: PropTypes.func.isRequired,
    onOlderServicesSelect: PropTypes.func.isRequired,
    youTubePlayerReady: PropTypes.bool.isRequired,
};