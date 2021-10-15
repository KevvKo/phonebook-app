import React from 'react';
import { render } from '../../scripts/test-utils';
import { mount, shallow } from 'enzyme';
import AppHeader from './AppHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SettingsMenu from '../SettingsMenu/SettingsMenu';
import Toolbar from '@mui/material/Toolbar';

test('should render AppHeader component', () => {
  render(<AppHeader />);
});

describe('AppHeader', () => {
  const element = shallow( <AppHeader /> );
  
  it('should contain Toolbar Component', () => {
    expect(element.find(Toolbar)).toHaveLength(1);
  });
  it('should contain Typography Component', () => {
    expect(element.find(Typography)).toHaveLength(1);
  });
  it('should contain one Typography Component', () => {
    expect(element.find(Typography)).toHaveLength(1);
  });
  it('should contain one IconButton Component', () => {
    expect(element.find(IconButton)).toHaveLength(1);
  });
  it('should contain one SettingsMenu Component', () => {
    expect(element.find(SettingsMenu)).toHaveLength(1);
  });
});