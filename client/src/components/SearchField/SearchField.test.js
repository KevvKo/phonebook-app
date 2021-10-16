import React from 'react';
import '../../scripts/i18n';
import { render, fireEvent, act } from '../../scripts/test-utils';
import SearchField from './SearchField';


describe( 'SearchField', () => {

  it('should render Searchfield Component', () => {
    render(<SearchField />);
  });
  it('renders default value', () => {
    const { getByTestId }= render(<SearchField />);
    const textField = getByTestId('search-field');
    const input = textField.querySelector('input');

    expect(input).toBeTruthy();
    expect(input.value).toBe('');
  });
  it('should change the value', async () => {

    const { getByTestId }= render(<SearchField />);
    const textField = getByTestId('search-field');
    const input = textField.querySelector('input');

    await act( async () => {
      fireEvent.change( input, {target: {value: 'foo'}});
      expect(input.value).toBe('foo');
    });
  });
})