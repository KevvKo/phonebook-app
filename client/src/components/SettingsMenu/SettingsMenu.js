
import React from 'react';
// Components
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Hooks
import { useTranslation } from 'react-i18next';

export default function SettingsMenu(props) {

    const [ t ] = useTranslation('common');

    return (
          <Menu
            id="basic-menu"
            sx={{ mr: 4 }}
            anchorEl={props.anchorElement}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={props.open}
            onClose={props.handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={props.handleClose}>{ t('appHeader.language')}</MenuItem>
            <MenuItem onClick={props.handleClose}>{ t('appHeader.close')}</MenuItem>
          </Menu>
    );
  }