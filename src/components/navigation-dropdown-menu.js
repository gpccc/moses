import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@herob/gatsby-plugin-react-i18next'

export default function NavigationDropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="nav-menu-button"
        aria-controls={open ? 'navigation-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{color: "white"}} />
      </Button>
      <Menu
        id="nav-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
      >
        <MenuItem onClick={handleClose}>Live stream</MenuItem>
        <MenuItem onClick={handleClose} divider="true">Church news</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/about-us/">About us</MenuItem>
        <MenuItem onClick={handleClose}>Employment opportunities</MenuItem>
      </Menu>
    </div>
  );
}