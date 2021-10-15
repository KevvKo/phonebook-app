import React from 'react';
import '../../scripts/i18n';
import { render } from '../../scripts/test-utils';
import SearchField from './SearchField';

test('should render Searchfield component', () => {
  render(<SearchField />);
});
