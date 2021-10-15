import React from 'react';
import '../../scripts/i18n';
import { render } from '../../scripts/test-utils';
import SettingsMenu from './SettingsMenu';
import { shallow } from 'enzyme';

test('should render SettingsMenu component', () => {
  render( <SettingsMenu />);
});
