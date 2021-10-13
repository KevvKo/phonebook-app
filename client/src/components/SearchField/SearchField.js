import React from 'react';
// Componrnts
import TextField from '@mui/material/TextField';
// Hooks
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
// GQL
import { PHONE_BOOK_QUERY } from '../../graphql/phonebook/phoneBookQuery';

export default function SearchField() {

  const [ t ] = useTranslation('common');
  
  function queryPoneBook( e ) {
    const query = e.target.value;
    const {error, loading, data } = useQuery( PHONE_BOOK_QUERY, {
      variables: { query }
    });
  }

  return (
      <TextField id="outlined-basic" label={ t('searchField.label') } variant="filled" onChange={ queryPoneBook } />
  );
}