import React from 'react';
// Hooks
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

export default function PhoneBookTable(props) {

  const [ t ] = useTranslation('common');
  const phoneBook = useSelector( state => state.phoneBook );
  const phoneBookEntrys = phoneBook.phoneBook;

  return (
    <>
        { phoneBookEntrys &&
          phoneBookEntrys.map( (c, i) => <div key={i}>{c.name}</div>)
        }  
    </>
  );
}
