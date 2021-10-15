import React from 'react';
import { render } from '../../scripts/test-utils';
import AppHeader from './AppHeader';

test('should render AppHeader component', () => {
  render(<AppHeader />);
});
