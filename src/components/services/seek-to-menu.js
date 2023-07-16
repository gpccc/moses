import React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TelegramIcon from '@mui/icons-material/Telegram';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';
import MovieIcon from '@mui/icons-material/Movie';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CakeIcon from '@mui/icons-material/Cake';
import PoolIcon from '@mui/icons-material/Pool';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import UnknownIcon from '@mui/icons-material/DeviceUnknown';

// import { useTranslation } from 'react-i18next';

import SeekPointType from '../../constants/seek-point-type';

export default function SeekToMenu({seekPoints, onSeekTo, youTubePlayerReady}) {
    // const { t } = useTranslation();
    const t = s=>s;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        onSeekTo(seekPoints[index]);
    };
      
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button size="small" color="primary" aria-controls="seek-to-menu" aria-haspopup="true" onClick={handleClick} disabled={seekPoints.length===0 || !youTubePlayerReady}>
                {t('Seek to')}
            </Button>
            <Menu
                id="seek-to-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {seekPoints.map((seekPoint, index) => (
                    <MenuItem
                        key={seekPoint.time}
                        dense={true}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <ListItemIcon style={{minWidth: '28px'}}>
                            {seekPoint.type===SeekPointType.BEGINNING && <PlayArrowIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BIBLE_VERSE && <MenuBookIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAISE_SONG && <MusicNoteIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.PRAYER && <TelegramIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.COMMUNION && <GroupIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.MESSAGE && <MessageIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.VIDEO && <MovieIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.ANNOUNCEMENTS && <AnnouncementIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BENEDICTION && <CardGiftcardIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BIRTHDAY && <CakeIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.BAPTISM && <PoolIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.NEW_MEMBERS && <GroupAddIcon fontSize="small" />}
                            {seekPoint.type===SeekPointType.UNKNOWN && <UnknownIcon fontSize="small" />}
                        </ListItemIcon>
                        <ListItemText primary={t(seekPoint.label)} />
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

SeekToMenu.propTypes = {
    seekPoints: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onSeekTo: PropTypes.func.isRequired,
    youTubePlayerReady: PropTypes.bool.isRequired,
};