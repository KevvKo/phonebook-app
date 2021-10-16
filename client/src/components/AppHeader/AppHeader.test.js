import React from 'react';
import { render } from '../../scripts/test-utils';
import AppHeader from './AppHeader';

test('should render AppHeader component', () => {
  render(<AppHeader />);
});

describe('AppHeader', () => {

  it('should contain Toolbar Component', () => {
    const { getByTestId } = render(<AppHeader />);
    const toolbar = getByTestId('app-header-toolbar');
    expect(toolbar).toBeTruthy;
  });
  it('should contain Typography Component', () => {
    const { getByTestId } = render(<AppHeader />);
    const typography = getByTestId('app-header-typography');
    expect(typography).toBeTruthy;
  });
  it('should contain one SettingsIcon Component', () => {
    const { getByTestId } = render(<AppHeader />);
    const settingsIcon = getByTestId('app-header-settings-icon');
    expect(settingsIcon).toBeTruthy;
  });
  it('should contain one IconButton Component', () => {
    const { getByTestId } = render(<AppHeader />);
    const iconButton = getByTestId('app-header-icon-button');
    expect(iconButton).toBeTruthy;
  });
});