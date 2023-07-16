import React from 'react';
import PropTypes from 'prop-types';

import CardMedia from '@mui/material/CardMedia';

export default function YouTubePlayer({playerID}) {
    return (
        <CardMedia
            component="div"
            frameBorder="0"
            id={playerID}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
    );
}

YouTubePlayer.propTypes = {
    playerID: PropTypes.string.isRequired,
};