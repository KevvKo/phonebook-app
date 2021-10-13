import React from 'react';
// Componrnts
import Box from '@mui/material/Box';
// Hooks
import { useTranslation } from 'react-i18next';

export default function PhoneBookTable() {

  const [ t ] = useTranslation('common');
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    </Box>
  );
}