import React from 'react';
import '../../scripts/i18n';
import { render, screen } from '../../scripts/test-utils';
import PhoneBookTable from './PhoneBookTable';

test('should render PhoneBookTable component', () => {
  render(<PhoneBookTable />);
});



describe('PhoneBookTable', () => {
  render( <PhoneBookTable />);
});