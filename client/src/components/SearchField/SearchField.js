import React from 'react';
import PropTypes from 'prop-types';
// Componrnts
import TextField from '@mui/material/TextField';
// Hooks
import { useTranslation } from 'react-i18next';
import { usePhoneBook } from '../../hooks/usePhoneBook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { setPhoneBook } from '../../store/slices/phoneBook';

export default function SearchField(props) {

  const [ t ] = useTranslation('common');
  const { getPhoneBookEntrys , data, loading } = usePhoneBook();
  const dispatch = useDispatch();
  
  const handleChange = (e) => {

    const value = e.target.value;
    getPhoneBookEntrys({ 
      variables: {
        query: value
      }
    });
  };

  useEffect(() => {

    if( data && !loading){
      dispatch( setPhoneBook( data.PhoneBookEntrys ));
    }
  }, [ data, loading ]);

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