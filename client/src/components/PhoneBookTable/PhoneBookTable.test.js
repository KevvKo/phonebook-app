import React from 'react';
import '../../scripts/i18n';
import { render } from '../../scripts/test-utils';
import PhoneBookTable from './PhoneBookTable';

test('should render PhoneBookTable component', () => {
  render(<PhoneBookTable />);
});
