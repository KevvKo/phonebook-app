
import React from 'react';
// Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
// Hooks
import { useTranslation } from 'react-i18next';
export default function AppHeader() {

    const [ t ] = useTranslation('common');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ background: 'var(--arctic-blue-color)', color: 'var(--font-color-primary)'}}>
          <Toolbar data-testid={'app-header-toolbar'} >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} data-testid={'app-header-typography'}>
            { t('appHeader.contacts')}
            </Typography>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
            data-testid={'app-header-icon-button'}
          >
            <SettingsIcon data-testid={'app-header-settings-icon'}/>
          </IconButton>
          <SettingsMenu open={ open } handleClose={ handleClose } anchorElement={ anchorEl } />
          </Toolbar>
        </AppBar>
      </Box>
    );
  }