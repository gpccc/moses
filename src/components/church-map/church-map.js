import React from 'react';
import PropTypes from 'prop-types';

const googleMapsKey = '';
const isBrowser = typeof window !== "undefined"

function ChurchMap({mapWidth, preferredLanguage}) {
    if (typeof mapWidth === 'undefined')  {
        mapWidth = 512;
    }

    const mapHeight = isBrowser && (window.innerWidth >= 768) ? mapWidth / 1.618 : mapWidth;

    let googleMapsLngCode = 'en-US';
    if (preferredLanguage === 'zf') {
        googleMapsLngCode = 'zh-CN';
    } else if (preferredLanguage === 'zh') {
        googleMapsLngCode = 'zh-TW';
    }

    // TODO: The Directions option is shown only on tablet and desktop (width 768 and up). Grrr...
    return (
    <iframe
        width={mapWidth}
        height={mapHeight}
        frameBorder="0" style={{border: 0}}
        src={`https://www.google.com/maps/embed/v1/place?zoom=16&q=place_id:ChIJFflyL1YHK4cR57bArk8BXLM&language=${googleMapsLngCode}&key=${googleMapsKey}`}
        allowFullScreen>
    </iframe>
    );
}

ChurchMap.propTypes = {
    mapWidth: PropTypes.number,
    preferredLanguage: PropTypes.string.isRequired,
};

export default ChurchMap;