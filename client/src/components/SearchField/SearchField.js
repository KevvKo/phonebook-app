import React from 'react';
// Componrnts
import TextField from '@mui/material/TextField';
// Hooks
import { useTranslation } from 'react-i18next';

export default function SearchField() {

  const [ t ] = useTranslation('common');
  
  return (
      <TextField id="outlined-basic" label={ t('searchField.label') } variant="outlined" />
  );
}