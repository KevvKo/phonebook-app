import React from 'react';
import '../../scripts/i18n';
import { render, fireEvent, act } from '../../scripts/test-utils';
import SettingsMenu from './SettingsMenu';
const { cleanup } = require("@testing-library/react");

describe( 'SearchField', () => {

  const anchorElement = document.createElement("button");

  afterEach(() => {
    cleanup();
  })
  it('should render SettingsMenu Component', () => {
    render( <SettingsMenu />);
  });
  it('should contain the menu-item component', () => {
    
    const { getAllByTestId }= render(<SettingsMenu anchorElement={ anchorElement } open={true}/>);
    const menuItems = getAllByTestId('settings-menu-item');
  
    expect(menuItems).toBeTruthy();
  });
  it('should be exactly contain two menu items', () => {
    
    const { getAllByTestId }= render(<SettingsMenu anchorElement={ anchorElement } open={true}/>);
    const menuItems = getAllByTestId('settings-menu-item');
  
    expect(menuItems).toHaveLength(2);
    expect(menuItems[0].innerHTML).toContain('English');
    expect(menuItems[1].innerHTML).toContain('German');
  });
  it('first menu item should be disabled', () => {
    
    const { getByText }= render(<SettingsMenu anchorElement={ anchorElement } open={true}/>);
    const menuItem = getByText('English');
    expect(menuItem.getAttribute('aria-disabled')).toBe('true');
  });
  it('should close the menu after click on a menu item', async () => {
    const handleClose = jest.fn();    
    const { getByText } = render(
      <SettingsMenu 
        anchorElement={ anchorElement } 
        open={true} 
        handleClose={ handleClose } 
      />);
    const menuItem = getByText('English');

    await act( async () => {
      fireEvent.click( menuItem );
    });
  });
  it('should switch to german after click', async () => {
    open = true;
    const handleClose = jest.fn(() => { open = false });    
    const { getAllByTestId } = render(
      <SettingsMenu 
        anchorElement={ anchorElement } 
        open={ open} 
        handleClose={ handleClose } 
      />);
    
    const menuItems = getAllByTestId('settings-menu-item');

    await act( async () => {
      fireEvent.click( menuItems[1] );
    });
    expect(open).toBe(false);
  });
})