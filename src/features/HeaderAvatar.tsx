import React, { MouseEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Notifications, Work, ArrowDropDown } from '@mui/icons-material';
import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material';
import { IconBtnWithBadge, SwitchMode } from '@/features';

export const HeaderAvatar = () => {
  const notificationMessages = useSelector(
    (state: any) => state.counterNotificationMessages.messages
  );
  const favorites = useSelector((state: any) => state.counterFavorites.favorites);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="flex items-center space-x-4">
      <Box className="flex items-center space-x-1">
        <SwitchMode />
        <IconBtnWithBadge title="Notifications" badgeContent={notificationMessages}>
          <Notifications className="fill-orange" />
        </IconBtnWithBadge>
        <IconBtnWithBadge title="Favorite jobs" badgeContent={favorites}>
          <Work className="fill-blue" />
        </IconBtnWithBadge>
      </Box>
      <div
        id="basic-button"
        className="group flex align-center space-x-4 cursor-pointer"
        onClick={handleClick}
      >
        <Avatar alt="User Full Name">SV</Avatar>
        <Box className="flex space-x-6">
          <Box>
            <Typography className="text-sm font-semibold" variant="subtitle1">
              Serhii Volovyk
            </Typography>
            <Typography className="text-xs text-gray" variant="subtitle2">
              Looking for
            </Typography>
          </Box>
          <ArrowDropDown className="fill-gray relative -top-1 group-hover:fill-black" />
        </Box>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <NavLink to="user/1" onClick={handleClose}>
          <MenuItem>Profile</MenuItem>
        </NavLink>
        <NavLink to="/" onClick={handleClose}>
          <MenuItem>Logout</MenuItem>
        </NavLink>
      </Menu>
    </Box>
  );
};
