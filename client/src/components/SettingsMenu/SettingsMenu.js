
import React from 'react';
// Components
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// Utilits
import i18n from '../../scripts/i18n';

export default function SettingsMenu(props) {

    const [ t ] = useTranslation('common');
    const options = [
      {
        label:  t('appHeader.en'),
        value: 'en'
      },
      {
        label: t('appHeader.de'),
        value: 'de'
      }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (event, index) => {

      const language = options[index].value;
      setSelectedIndex(index);
      i18n.changeLanguage(language);
      props.handleClose();
    };

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
            {options.map((option, index) => (
              <MenuItem
                key={option.value}
                selected={index === selectedIndex}
                onClick={(event) => handleClick(event, index)}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
    );
  }