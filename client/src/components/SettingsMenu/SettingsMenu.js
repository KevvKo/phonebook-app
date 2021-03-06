import React from 'react';
// Components
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// Hooks
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';


export default function SettingsMenu(props) {

    const [ t, i18n ] = useTranslation('common');
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

    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const handleClick = (event, index) => {

      const language = options[index].value;
      setSelectedIndex(index);
      i18n.changeLanguage(language);
      props.handleClose();
    };

    const styles = {
      '&.Mui-selected': {
        background: 'var(--arctic-blue-color)'
      },
      '&:hover': {
        background: 'var(--arctic-blue-color-20)'
      }
    };
    
    useEffect(() => {
      if( i18n.language === 'de' ) {
        setSelectedIndex(1);
      }
    }, [ i18n ]);

    return (
          <Menu
            id='settings-menu'
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
                data-testid={'settings-menu-item'}
                key={ option.value }
                selected={index === selectedIndex}
                disabled={index === selectedIndex}
                onClick={(event) => handleClick(event, index)}
                sx={ styles }
              >
                { option.label }
              </MenuItem>
            ))}
          </Menu>
    );
  }

  SettingsMenu.defaultProps = {
    open: false
  };