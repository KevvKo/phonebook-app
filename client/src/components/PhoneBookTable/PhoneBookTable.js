import React from 'react';
import { PropTypes } from 'prop-types';
// Hooks
import { useTranslation } from 'react-i18next';

export default function PhoneBookTable(props) {

  const [ t ] = useTranslation('common');
  
  return (
    <>
      {props.phoneBookEntrys}
    </>
  );
}

PhoneBookTable.propTypes = {
  phoneBookEntrys: PropTypes.array
}