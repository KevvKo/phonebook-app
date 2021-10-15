
import React from 'react';
// Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// Hooks
import { useTranslation } from 'react-i18next';
export default function AppHeader() {

    const [ t ] = useTranslation('common');

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { t('appHeader.contacts')}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }