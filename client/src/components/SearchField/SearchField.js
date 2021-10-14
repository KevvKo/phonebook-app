import React from 'react';
import PropTypes from 'prop-types';
// Componrnts
import TextField from '@mui/material/TextField';
// Hooks
import { useTranslation } from 'react-i18next';
import { usePhoneBook } from '../../hooks/usePhoneBook';

export default function SearchField(props) {

  const [ t ] = useTranslation('common');
  const { getPhoneBookEntrys , data } = usePhoneBook();

  const handleChange = (e) => {

    const value = e.target.value;
    getPhoneBookEntrys({ 
      variables: {
        query: value
      }
    });
  };

  if(props.data) props.onChange( data );

  return (
      <TextField 
        onChange={ handleChange } 
        id="outlined-basic" 
        label={ t('searchField.label') } 
        variant="filled" 
      />
  );
}

SearchField.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func
}