import React from 'react';
// Componrnts
import TextField from '@mui/material/TextField';
// Hooks
import { useTranslation } from 'react-i18next';
import { usePhoneBook } from '../../hooks/usePhoneBook';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { setPhoneBook } from '../../store/slices/phoneBook';

export default function SearchField() {

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
  
  const styles = {
    width: '98%', 
    marginY: '20px',
    '& label.Mui-focused': {
      color: 'var(--arctic-blue-color-dark)',
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        background: 'var(--grey-color-70)',
        borderRadius: '20px',

      },
      '& fieldset': {
        borderRadius: '20px',
        borderColor: 'var(--grey-color-70)',
      },
      '&:hover fieldset': {
        borderColor:  'var(--arctic-blue-color-light)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--arctic-blue-color-20)',
      },
    }
  };

  return (
      <TextField 
        data-testid={'search-field'}
        className={ styles.textField }
        onChange={ handleChange } 
        id="outlined-basic" 
        label={ t('searchField.label') } 
        size="small"
        type='text'
        sx={ styles }/>
  );
}
